export const BAD_CREDENTIALS = 'Pogrešni kredencijali!';
export const NO_VALUES = 'Morate uneti sva polja!';

export enum RegisterErrors {
  USERNAME_ALREADY_EXISTS = 'Korisnik sa ovim korisničkim imenom već postoji!',
  EMAIL_ALREADY_EXISTS = 'Korisnik sa ovom adresom e-pošte je već registrovan!',
  EMPTY_INPUT = 'Morate uneti sva polja',
  INVALID_EMAIL = 'Morate uneti validnu email adresu!',
  INVALID_PHONE = 'Morate uneti validan broj telefona!',
  INVALID_PASSWORD = 'Lozinka ne može biti kraća od 7 znakova, mora početi slovom i sadržati barem po jedno veliko slovo, specijalni karakter i cifru.',
  INVALID_FIELD = 'Polje ne može biti kraće od tri karaktera!',
}

export const INVALID_TICKET_INPUT = 'Molimo unestite ispravan broj karata!';

export const GROUP_TO_SMALL = 'Grupa mora imati najmanje 15 članova!';

export const ANIMAL_ERROR = '404 NOT FOUND';

export const ADD_ANIMAL_EMPTY = 'Sva polja moraju biti popunjena!';
export const PHOTO_ERROR = 'Odaberite fotografiju!';
