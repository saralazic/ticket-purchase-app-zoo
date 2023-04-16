import { Component } from '@angular/core';
import { PurchaseStatus, TicketDataDto } from 'src/app/models/tickets';
import { ticketService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-operate-tickets',
  templateUrl: './operate-tickets.component.html',
  styleUrls: ['./operate-tickets.component.css'],
})
export class OperateTicketsComponent {
  private ticketService = ticketService;

  public ticketsToOperate: TicketDataDto[] = [];

  ngOnInit() {
    this.ticketsToOperate = this.ticketService.getAllTicketsForProcessing();
  }

  process(id: string, status: boolean) {
    this.ticketsToOperate = ticketService.processTicket(id, status);
  }
}
