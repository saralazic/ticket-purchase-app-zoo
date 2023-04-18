import { Component } from '@angular/core';
import { PurchaseStatus, TicketDataDto } from 'src/app/models/tickets';
import { PROMO_CODES, TICKET_TYPE } from 'src/app/models/types';
import { ticketService } from 'src/app/services/tickets.service';
import { reloadPage, sleep } from 'src/app/utilities';

@Component({
  selector: 'app-operate-tickets',
  templateUrl: './operate-tickets.component.html',
  styleUrls: ['./operate-tickets.component.css'],
})
export class OperateTicketsComponent {
  private ticketService = ticketService;

  public error: string = '';
  public ticketsToOperate: TicketDataDto[] = [];

  ngOnInit() {
    this.ticketsToOperate = this.ticketService.getAllTicketsForProcessing();
    this.error = '';
  }

  async process(id: string, status: boolean) {
    try {
      this.ticketsToOperate.map((t) => {
        if (t.id === id)
          t.status = status ? PurchaseStatus.APPROVED : PurchaseStatus.DECLINED;
      });
      (<HTMLInputElement>document.getElementById(id)).style.backgroundColor =
        status ? '#dae1ba' : '#eccaca';
      this.manageButton(id);
      await sleep(1000); // sleep 3 seconds

      this.ticketsToOperate = ticketService.processTicket(id, status);
      window.location.reload();
    } catch (err) {
      this.error =
        'Došlo je do greške, osvežite stranicu i pokušajte ponovo! :(';
    }
  }

  manageButton(id: string) {
    let approved = <HTMLInputElement>document.getElementById('approve_' + id);
    let declined = <HTMLInputElement>document.getElementById('decline_' + id);
    approved.disabled = true;
    declined.disabled = true;
  }

  generateText(row: TicketDataDto) {
    const count =
      row.request.zoo +
      row.request.aquarium +
      row.request.feeding +
      row.request.full;
    let text = '';
    text += row.username + ' želi da kupi ';
    text += count;
    switch (count % 10) {
      case 1:
        text += ' kartu ';
        break;
      case 2:
      case 3:
      case 4:
        text += ' karte ';
        break;
      default:
        text += ' karata ';
    }

    text += 'za ';

    switch (row.request.type) {
      case TICKET_TYPE.CHILDREN:
        text += 'decu';
        break;
      case TICKET_TYPE.ADULT:
        text += 'odrasle';
        break;
      default:
        text += 'grupu';
    }

    text += ' ';

    if (this.validPromoCode(row.request.promo_code)) {
      text += 'sa promo kodom ' + row.request.promo_code;
    } else text += 'bez promo koda';

    text += ' po ceni od ';
    text += row.request.price + ' dinara';

    return text;
  }

  validPromoCode(code: string | undefined | null) {
    if (
      code === PROMO_CODES.free_feeding ||
      code === PROMO_CODES.gift ||
      code === PROMO_CODES.third_free
    )
      return code;
    return undefined;
  }
}
