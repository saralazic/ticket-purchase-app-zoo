import { localStorageItems } from 'initial_data/init';
import { User, UserCredentials, UserData, UserType } from '../models/user';
import { userService } from './user.service';
import { UserWithType } from './../models/user';
import { RegisterErrors } from '../constants/errors';

export class AuthService {
  constructor() {}

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
    const allUsers = userService.getAllUsers();
    let currentUser = allUsers.find((usr) => usr.username === data.username);

    if (currentUser) {
      return RegisterErrors.USERNAME_ALREADY_EXISTS;
    }

    currentUser = allUsers.find((usr) => usr.email === data.email);
    if (currentUser) {
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

  updateUser(data: UserData): void {
    let allUsers = userService.getAllUsers();
    let currentUserIndex = allUsers.findIndex(
      (usr) => usr.email === data.email
    );

    if (currentUserIndex >= 0) {
      allUsers[currentUserIndex] = data;
      localStorage.setItem(localStorageItems.USERS, JSON.stringify(allUsers));
      localStorage.setItem(localStorageItems.LOGGED_IN, JSON.stringify(data));
    }
  }

  logout() {
    localStorage.removeItem(localStorageItems.LOGGED_IN);
  }

  getLoggedUser(): UserWithType | null {
    const loggedIn = localStorage.getItem(localStorageItems.LOGGED_IN);
    return loggedIn === null ? null : JSON.parse(loggedIn);
  }

  logOut() {
    localStorage.removeItem(localStorageItems.LOGGED_IN);
  }
}

export const authService = new AuthService();
