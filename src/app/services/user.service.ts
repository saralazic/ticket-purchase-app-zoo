import { localStorageItems } from 'initial_data/init';
import { UserData } from '../models/user';

export class UserService {
  constructor() {}

  public checkIfUserIsEmployee(email: string): boolean {
    const employees = this.getEmployees();
    return employees.find((e) => e === email) ? true : false;
  }

  public getAllUsers(): UserData[] {
    const usersFromStorage = localStorage.getItem(localStorageItems.USERS);
    return this.parseArrayFromStorage(usersFromStorage);
  }

  public getEmployees(): string[] {
    const employeesFromStorage = localStorage.getItem(
      localStorageItems.EMPLOYEES
    );
    return this.parseArrayFromStorage(employeesFromStorage);
  }

  private parseArrayFromStorage(stringFromStorage: string | null): any[] {
    return stringFromStorage ? JSON.parse(stringFromStorage) : [];
  }
}

export const userService = new UserService();
