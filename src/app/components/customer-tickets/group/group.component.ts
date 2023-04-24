import { Component } from '@angular/core';
import { POSITIVE_MESSAGE } from 'src/app/constants/constants';
import { GROUP_TO_SMALL, INVALID_TICKET_INPUT } from 'src/app/constants/errors';
import { TicketData } from 'src/app/models/tickets';
import { PRICES, TICKET_TYPE } from 'src/app/models/enums';
import { authService } from 'src/app/services/auth.service';
import { ticketService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent {
  private authService = authService;
  private ticketService = ticketService;

  public quantity_zoo = 0;
  public quantity_aquarium = 0;
  public quantity_feeding = 0;
  public quantity_full = 0;
  public price = 0;

  public message?: string;

  ngOnInit() {
    this.manageButton();
  }

  constructor() {}

  sendRequest() {
    const user = this.authService.getLoggedUser();

    if (user) {
      const ticket = {
        username: user?.username,
        request: {
          zoo: this.quantity_zoo,
          aquarium: this.quantity_aquarium,
          feeding: this.quantity_feeding,
          full: this.quantity_full,
          type: TICKET_TYPE.GROUP,
          promo_code: undefined,
          price: this.price,
        },
      } as TicketData;

      this.ticketService.sendTicketToProcessing(ticket);
      this.message = POSITIVE_MESSAGE;
    }
  }

  calculatePrice() {
    if (!this.validNumberOfTickets()) {
      this.message = INVALID_TICKET_INPUT;
      return;
    }
    const overallCount =
      this.quantity_aquarium +
      this.quantity_zoo +
      this.quantity_feeding +
      this.quantity_full;

    if (overallCount < 15) {
      this.message = GROUP_TO_SMALL;
      return;
    }

    this.price =
      this.quantity_zoo * PRICES.GROUP_ZOO +
      this.quantity_aquarium * PRICES.GROUP_AQ +
      this.quantity_feeding * PRICES.GROUP_FEED +
      this.quantity_full * PRICES.GROUP_FEED;
  }

  manageButton() {
    let button = <HTMLInputElement>document.getElementById('submitReq');

    const overallCount =
      this.quantity_aquarium +
      this.quantity_zoo +
      this.quantity_feeding +
      this.quantity_full;

    const enabled =
      this.validNumberOfTickets() &&
      (this.quantity_zoo > 0 ||
        this.quantity_aquarium > 0 ||
        this.quantity_feeding > 0 ||
        this.quantity_full > 0) &&
      overallCount >= 15;
    button.disabled = !enabled;
    this.resetMessage();
  }

  resetMessage() {
    this.message = undefined;
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
}
