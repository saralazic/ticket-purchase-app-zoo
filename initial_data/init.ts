import { v4 as uuid } from 'uuid';
import { TICKET_TYPE } from 'src/app/models/types';

export function initializeLocalStorage() {
  if (!localStorage.getItem(localStorageItems.USERS))
    localStorage.setItem(
      localStorageItems.USERS,
      JSON.stringify(USERS_FULL_DATA)
    );
  if (!localStorage.getItem(localStorageItems.EMPLOYEES))
    localStorage.setItem(
      localStorageItems.EMPLOYEES,
      JSON.stringify(EMPLOYEES)
    );
  if (!localStorage.getItem(localStorageItems.TICKETS_TO_PROCESS))
    localStorage.setItem(
      localStorageItems.TICKETS_TO_PROCESS,
      JSON.stringify(TICKETS)
    );
}

const USERS_FULL_DATA = [
  {
    username: 'pera',
    password: 'pera123',
    email: 'pera@gmail.com',
    address: 'Ustanicka 5',
    first_name: 'Petar',
    last_name: 'Petrovic',
    phone: '067/7234-897',
  },
  {
    username: 'zika',
    password: 'zika123',
    email: 'zika@gmail.com',
    address: 'Takovska 5',
    first_name: 'Zivorad',
    last_name: 'Zikic',
    phone: '067/1234-897',
  },
  {
    username: 'laza',
    password: 'lazaa123',
    email: 'lazaa@gmail.com',
    address: 'Bulevar Kralja Aleksandra 148',
    first_name: 'Laza',
    last_name: 'Lazic',
    phone: '067/7234-797',
  },
  {
    username: 'sara',
    password: 'sara123',
    email: 'sara@gmail.com',
    address: 'Voje Veljkovica 22',
    first_name: 'Sara',
    last_name: 'Lazic',
    phone: '067/7159-923',
  },
  {
    username: 'mina',
    password: 'mina123',
    email: 'mina@gmail.com',
    address: 'Vardarska 12',
    first_name: 'Mina',
    last_name: 'Lazic',
    phone: '064/0914-217',
  },
];

const EMPLOYEES = ['pera', 'zika', 'laza'];

const TICKETS = [
  {
    id: uuid(),
    username: 'sara',
    request: {
      zoo: 0,
      aquarium: 1,
      feeding: 0,
      full: 0,
      promo_code: null,
      type: TICKET_TYPE.CHILDREN,
      price: 250,
    },
  },
];

export enum localStorageItems {
  USERS = 'users_full_data',
  EMPLOYEES = 'employees',
  LOGGED_IN = 'logged_in',
  TICKETS_TO_PROCESS = 'tickets_requests',
  PROCESSED_TICKETS = 'processed_tickets',
}
