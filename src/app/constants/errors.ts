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