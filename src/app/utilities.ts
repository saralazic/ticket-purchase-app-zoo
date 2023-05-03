import { UserData, UserType, UserWithType } from './models/user';

export function reloadPage() {
  window.location.reload();
}

export async function sleep(ms: number): Promise<any> {
  return new Promise((r) => setTimeout(r, ms));
}

export function passwordValid(pass: string): boolean {
  return (
    /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(pass) &&
    /^[a-zA-Z]/.test(pass)
  );
}

export function emailValid(email: string): boolean {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
}

export function phoneValid(phone: string): boolean {
  return (
    /^(060|061|062|063|066|067)\d{7}$/.test(phone) || /^(0)\d{8}$/.test(phone)
  );
}

export function otherFieldsValid(field: string): boolean {
  if (field.length < 3) return false;
  return true;
}

export function emptyFields(data: UserData): boolean {
  if (
    typeof data.username !== 'string' ||
    typeof data.password !== 'string' ||
    typeof data.email !== 'string' ||
    typeof data.first_name !== 'string' ||
    typeof data.last_name != 'string' ||
    typeof data.address !== 'string' ||
    typeof data.phone !== 'string'
  ) {
    return true; //error
  }
  return false;
}

export function returnEmptyObject(): UserWithType {
  return {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    type: UserType.visitor,
  } as UserWithType;
}
