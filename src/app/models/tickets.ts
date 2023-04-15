import { v4 as uuid } from 'uuid';
import { PROMO_CODES, TICKET_TYPE } from './types';

export class Ticket {
  private id: string;
  private username: string;
  private request: TicketRequest;
  private status?: PurchaseStatus;

  constructor(data: TicketData) {
    this.id = data.id ?? uuid();
    this.username = data.username;
    this.request = data.request;
    this.status = data.status;
  }

  public getDto(): TicketDataDto {
    return {
      id: this.id,
      username: this.username,
      request: this.request,
      status: this.status,
    };
  }
}

export interface TicketDataDto {
  id: string;
  username: string;
  request: TicketRequest;
  status?: PurchaseStatus;
}

export interface TicketData {
  id?: string;
  username: string;
  request: TicketRequest;
  status?: PurchaseStatus;
}

export interface TicketRequest {
  zoo: number;
  aquarium: number;
  feeding: number;
  full: number;
  promo_code?: PROMO_CODES | null;
  type: TICKET_TYPE;
  price: number;
}

export enum PurchaseStatus {
  APPROVED = 'approved',
  DECLINED = 'declined',
}
