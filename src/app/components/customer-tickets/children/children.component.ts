import { Component } from '@angular/core';
import { TicketData } from 'src/app/models/tickets';
import { PRICES, PROMO_CODES, TICKET_TYPE } from 'src/app/models/types';
import { authService } from 'src/app/services/auth.service';
import { ticketService } from 'src/app/services/tickets.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent {
  private authService = authService;
  private ticketService = ticketService;

  public promo_code: string | undefined;
  public quantity_zoo = 0;
  public quantity_aquarium = 0;
  public quantity_feeding = 0;
  public quantity_full = 0;
  public price = 0;

  ngOnInit() {
    this.manageButton();
  }

  constructor() {}

  sendRequest() {
    const user = authService.getLoggedUser();

    if (user) {
      const ticket = {
        username: user?.username,
        request: {
          zoo: this.quantity_zoo,
          aquarium: this.quantity_aquarium,
          feeding: this.quantity_feeding,
          full: this.quantity_full,
          type: TICKET_TYPE.CHILDREN,
          promo_code: this.promo_code,
          price: this.price,
        },
      } as TicketData;

      ticketService.sendTicketToProcessing(ticket);
    }
  }

  calculatePrice() {
    const priceFeed =
      this.promo_code?.toLowerCase() === PROMO_CODES.free_feeding
        ? PRICES.CHILDREN_ZOO
        : PRICES.CHILDREN_FEED;

    const priceFull =
      this.promo_code?.toLowerCase() === PROMO_CODES.free_feeding
        ? PRICES.CHILDREN_AQ
        : PRICES.CHILDREN_FULL;

    const { zoo, aq, feed, full } = this.discount();

    const sumZoo = zoo * PRICES.CHILDREN_ZOO;
    const sumAq = aq * PRICES.CHILDREN_AQ;
    const sumFeed = feed * priceFeed;
    const sumFull = full * priceFull;
    this.price = sumZoo + sumAq + +sumFeed + sumFull;
  }

  manageButton() {
    let button = <HTMLInputElement>document.getElementById('submitReq');
    const enabled =
      this.validNumberOfTickets() &&
      (this.quantity_zoo > 0 ||
        this.quantity_aquarium > 0 ||
        this.quantity_feeding > 0 ||
        this.quantity_full > 0);
    button.disabled = !enabled;
  }

  //** helpers */
  validNumberOfTickets(): boolean {
    return (
      this.quantity_zoo >= 0 &&
      this.quantity_aquarium >= 0 &&
      this.quantity_feeding >= 0 &&
      this.quantity_full >= 0
    );
  }

  discount() {
    let zoo = this.quantity_zoo;
    let aq = this.quantity_aquarium;
    let feed = this.quantity_feeding;
    let full = this.quantity_full;

    const overallCount = zoo + aq + feed + full;

    if (this.promo_code !== PROMO_CODES.third_free || overallCount < 3) {
      return { zoo, aq, feed, full };
    }

    let toDiscount = Math.floor(overallCount / 3);

    if (zoo > toDiscount) {
      zoo = zoo - toDiscount;
      toDiscount = 0;
    } else {
      toDiscount = toDiscount - zoo;
      zoo = 0;
    }

    if (aq > toDiscount) {
      aq = aq - toDiscount;
      toDiscount = 0;
    } else {
      toDiscount = toDiscount - aq;
      aq = 0;
    }

    if (feed > toDiscount) {
      feed = feed - toDiscount;
      toDiscount = 0;
    } else {
      toDiscount = toDiscount - feed;
      feed = 0;
    }

    if (full > toDiscount) {
      full = full - toDiscount;
      toDiscount = 0;
    } else {
      toDiscount = toDiscount - full;
      full = 0;
    }

    return { zoo, aq, feed, full };
  }
}