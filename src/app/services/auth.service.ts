import { initializeLocalStorage, localStorageItems } from 'initial_data/init';
import { User, UserCredentials, UserType } from '../models/user';
import { userService } from './userService';

export class AuthService {
  constructor() {
    initializeLocalStorage();
  }

  login(credentials: UserCredentials): User | null {
    if (
      typeof credentials.username !== 'string' ||
      typeof credentials.password !== 'string'
    ) {
      return null; //error
    }

    const allUsers = userService.getAllUsers();
    const currentUser = allUsers.find(
      (usr) => usr.username === credentials.username
    );

    if (!currentUser) {
      console.log(`LOGIN FAILED`);
      return null;
    } else {
      const currentUserObject = new User(currentUser);

      if (credentials.password === currentUser?.password) {
        if (currentUserObject.getType() === UserType.employee) {
          console.log(`employee`);
        } else console.log(`visitor`);

        localStorage.setItem(
          localStorageItems.LOGGED_IN,
          JSON.stringify(currentUserObject.getDto())
        );

        return currentUserObject;
      }

      return null;
    }
  }

  logout() {
    localStorage.removeItem(localStorageItems.LOGGED_IN);
  }
}

export const REGISTER_URL = 'https/::localhost:4200/api/register';
export const LOGIN_URL = 'https/::localhost:4200/api/login';

export const authService = new AuthService();
