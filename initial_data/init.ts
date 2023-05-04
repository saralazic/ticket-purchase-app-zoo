import { v4 as uuid } from 'uuid';
import { TICKET_TYPE } from 'src/app/models/enums';
import { Animal } from 'src/app/models/animal';

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

  if (!localStorage.getItem(localStorageItems.ANIMALS))
    localStorage.setItem(localStorageItems.ANIMALS, JSON.stringify(ANIMALS));
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

const EMPLOYEES = ['pera@gmail.com', 'zika@gmail.com', 'laza@gmail.com'];

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

const PANDA = {
  specie: 'Džinovska panda',
  latin: 'Ailuropoda melanoleuca',
  descent: 'Kina',
  population: '2000',
  lifespan: '20 godina',
  img: '../../../../assets/images/giant_panda.png',
  comments: [
    {
      author: 'sara',
      text: 'Volim pande',
      replies: [],
      date: new Date(2023, 4, 20),
    },
    {
      author: 'mina',
      text: 'Da li su dzinovske pande jos uvek ugrozena vrsta?',
      replies: [],
      date: new Date(2023, 4, 23),
    },
  ],
};

const RED_PANDA = {
  specie: 'Crvena panda',
  latin: 'Ailurus fulgens',
  descent: 'Nepal, Kina',
  population: '2500',
  lifespan: '8-15 godina',
  img: '../../../../assets/images/red_panda.jpg',
  comments: [
    {
      author: 'sara',
      text: 'Prelepi su',
      replies: [],
      date: new Date(2023, 4, 20),
    },
  ],
};

const RABBIT = {
  specie: 'Patuljasti zec',
  latin: 'Oryctolagus cuniculus domesticus',
  descent: 'Južna Evropa',
  population: 'ne postoji adekvatna procena',
  lifespan: '6-12 godina',
  img: '../../../../assets/images/rabbit.png',
  comments: [
    {
      author: 'sara',
      text: 'Obožavam kuniće, prelepi su',
      date: new Date(2023, 4, 24),
      replies: [],
    },
    {
      author: 'mina',
      text: 'Postoji li deo gde mogu da se maze zivotinje poput domacih kunica?',
      replies: [
        {
          author: 'Zoo vrt Pandica',
          text: 'Poštovana, za sada ne postoji ali svidja nam se zamisao i u budućem periodu će najverovatnije biti ostvarena',
          replies: [],
          date: new Date(2023, 4, 26),
        },
      ],
      date: new Date(2023, 4, 26),
    },
  ],
};

const ELEPHANT = {
  specie: 'Afrički slon',
  latin: 'Loxodonta africana',
  descent: 'Afrika',
  population: 'oko 40 hiljada',
  lifespan: 'oko 70 godina',
  img: '../../../../assets/images/elephant.jpg',
  comments: [],
};

const PENGUIN = {
  specie: 'Kraljevski pingvin',
  latin: 'Aptenodytes patagonicus',
  descent: 'ostrva sub-Antarktika',
  population: '2,23 miliona parova',
  lifespan: '15-25 godina',
  img: '../../../../assets/images/penguin.jpg',
  comments: [],
};

const HIPPO = {
  specie: 'Nilski konj',
  latin: 'Hippopotamus amphibius',
  descent: 'Severna Afrika i Evropa',
  population: 'oko 120 hiljada',
  lifespan: '40-50 godina',
  img: '../../../../assets/images/hippo.jpg',
  comments: [],
};

const MONKEY = {
  specie: 'Tomasov langur',
  latin: 'Presbytis thomasi',
  descent: 'Severna Sumatra, Indonezija',
  population: '550 do 700',
  lifespan: 'do 20 godina',
  img: '../../../../assets/images/langur.jpg',
  comments: [],
};

const FLAMINGO = {
  specie: 'Ružičasti ﬂamingo',
  latin: 'Phoenicopterus',
  descent: 'Afrika, južna Azija, južna Evropa',
  population: 'između 1.5 i 2.5 miliona',
  lifespan: '20-30 godina, u zatočeništvu do 50',
  img: '../../../../assets/images/flamingo.jpg',
  comments: [],
};

const GIRAFFE = {
  specie: 'Žirafa',
  latin: 'Giraffa camelopardalis',
  descent: 'Od Čada do Južne Afrike',
  population: '110 do 150 hiljada jedinki',
  lifespan: '220-25 godina, u zatočeništvu do 28',
  img: '../../../../assets/images/giraffe.jpeg',
  comments: [],
};

const FROG = {
  specie: 'Staklena žaba',
  latin: 'Centrolenidae',
  descent: 'Južna Amerika',
  population: 'nema informacija',
  lifespan: 'do 14 godina',
  img: '../../../../assets/images/frog.jpg',
  comments: [],
};

const ANIMALS = [
  PANDA,
  RED_PANDA,
  RABBIT,
  ELEPHANT,
  PENGUIN,
  HIPPO,
  MONKEY,
  FLAMINGO,
  GIRAFFE,
  FROG,
] as Animal[];

export enum localStorageItems {
  USERS = 'users_full_data',
  EMPLOYEES = 'employees',
  LOGGED_IN = 'logged_in',
  TICKETS_TO_PROCESS = 'tickets_requests',
  PROCESSED_TICKETS = 'processed_tickets',
  ANIMALS = 'animals',
  NEW_ANIMAL = 'new_animal',
}
