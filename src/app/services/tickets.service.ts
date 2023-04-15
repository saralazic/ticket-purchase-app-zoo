import { localStorageItems } from 'initial_data/init';
import { Ticket, TicketData, TicketDataDto } from '../models/tickets';

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

  private getAllProcessedTickets(): TicketDataDto[] {
    const tickets = localStorage.getItem(localStorageItems.PROCESSED_TICKETS);
    return tickets === null ? [] : JSON.parse(tickets);
  }
  private getAllTicketsForProcessing(): TicketDataDto[] {
    const tickets = localStorage.getItem(localStorageItems.TICKETS_TO_PROCESS);
    return tickets === null ? [] : JSON.parse(tickets);
  }
}

export const ticketService = new TicketService();
