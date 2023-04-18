import { localStorageItems } from 'initial_data/init';
import {
  PurchaseStatus,
  Ticket,
  TicketData,
  TicketDataDto,
} from '../models/tickets';

export class TicketService {
  constructor() {}

  public sendTicketToProcessing(ticketToProcess: TicketData) {
    const ticket = new Ticket(ticketToProcess);
    this.addNewTicketToProcess(ticket.getDto());
  }

  private addNewTicketToProcess(ticket: TicketDataDto) {
    const allTicketsToProcess = this.getAllTicketsForProcessing();
    allTicketsToProcess.push(ticket);
    localStorage.setItem(
      localStorageItems.TICKETS_TO_PROCESS,
      JSON.stringify(allTicketsToProcess)
    );
  }

  public processTicket(id: string, status: boolean) {
    let newTickets = this.getAllTicketsForProcessing();

    const ticket = newTickets.find((t) => t.id === id);
    if (!ticket) return newTickets;

    ticket.status = status ? PurchaseStatus.APPROVED : PurchaseStatus.DECLINED;
    const oldTickets = this.getAllProcessedTickets();
    oldTickets.push(ticket);
    this.saveProcessedTickets(oldTickets);

    newTickets = newTickets.filter((t) => t.id !== id);
    this.saveTicketsToProcess(newTickets);
    return newTickets;
  }

  private getAllProcessedTickets(): TicketDataDto[] {
    const tickets = localStorage.getItem(localStorageItems.PROCESSED_TICKETS);
    return tickets ? JSON.parse(tickets) : [];
  }

  public getAllTicketsForProcessing(): TicketDataDto[] {
    const tickets = localStorage.getItem(localStorageItems.TICKETS_TO_PROCESS);
    return tickets ? JSON.parse(tickets) : [];
  }

  private saveTicketsToProcess(tickets: TicketDataDto[]) {
    localStorage.setItem(
      localStorageItems.TICKETS_TO_PROCESS,
      JSON.stringify(tickets)
    );
  }

  private saveProcessedTickets(tickets: TicketDataDto[]) {
    localStorage.setItem(
      localStorageItems.PROCESSED_TICKETS,
      JSON.stringify(tickets)
    );
  }
}

export const ticketService = new TicketService();
