import { localStorageItems } from 'initial_data/init';
import { UserData } from '../models/user';

export class UserService {
  constructor() {}

  public checkIfUserIsEmployee(email: string): boolean {
    const employees = this.getEmployees();
    return employees.find((e) => e === email) ? true : false;
  }

  getUserEmailByUsername(username: string): string {
    const users = this.getAllUsers();
    const user = users.find((u) => u.username === username);
    return user ? user.email : '';
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
