import { initializeLocalStorage, localStorageItems } from 'initial_data/init';
import { User, UserCredentials, UserData, UserType } from '../models/user';
import { userService } from './userService';
import { UserWithType } from './../models/user';
import { RegisterErrors } from '../constants/errors';

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
    }

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

  register(data: UserData): User | RegisterErrors {
    if (
      typeof data.username !== 'string' ||
      typeof data.password !== 'string' ||
      typeof data.email !== 'string' ||
      typeof data.first_name !== 'string' ||
      typeof data.last_name != 'string' ||
      typeof data.address !== 'string' ||
      typeof data.phone !== 'string'
    ) {
      return RegisterErrors.EMPTY_INPUT; //error
    }

    const allUsers = userService.getAllUsers();
    let currentUser = allUsers.find((usr) => usr.username === data.username);

    if (currentUser) {
      console.log('Username already exists');
      return RegisterErrors.USERNAME_ALREADY_EXISTS;
    }

    currentUser = allUsers.find((usr) => usr.email === data.email);
    if (currentUser) {
      console.log('Email already exists');
      return RegisterErrors.EMAIL_ALREADY_EXISTS;
    }

    const newUser = new User(data);
    allUsers.push(data);

    localStorage.setItem(localStorageItems.USERS, JSON.stringify(allUsers));
    localStorage.setItem(
      localStorageItems.LOGGED_IN,
      JSON.stringify(newUser.getDto())
    );
    return newUser;
  }

  logout() {
    localStorage.removeItem(localStorageItems.LOGGED_IN);
  }

  getLoggedUser(): UserWithType | null {
    const loggedIn = localStorage.getItem(localStorageItems.LOGGED_IN);
    return loggedIn === null ? null : JSON.parse(loggedIn);
  }
}

export const authService = new AuthService();
