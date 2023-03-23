import { userService } from '../services/userService';

export class User {
  private username: string;
  private password: string;
  private email: string;
  private firstName: string;
  private lastName: string;
  private phone: string;
  private address: string;
  private type: UserType = UserType.visitor;

  constructor(data: UserData) {
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.phone = data.phone;
    this.address = data.address;
    this.setType();
  }

  public setType() {
    this.type = userService.checkIfUserIsEmployee(this.username)
      ? UserType.employee
      : UserType.visitor;
  }

  public getType(): UserType {
    return this.type;
  }

  public getDto(): UserWithType {
    return {
      username: this.username,
      password: this.password,
      email: this.email,
      first_name: this.firstName,
      last_name: this.lastName,
      phone: this.phone,
      address: this.address,
      type: this.type,
    };
  }
}

export enum UserType {
  employee,
  visitor,
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserData extends UserCredentials {
  email: string;
  address: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface UserWithType extends UserData {
  type: UserType;
}
