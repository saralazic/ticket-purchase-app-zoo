import { Component } from '@angular/core';
import { RegisterErrors } from 'src/app/constants/errors';
import { UserData, UserWithType } from 'src/app/models/user';
import { authService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import {
  emailValid,
  emptyFields,
  otherFieldsValid,
  passwordValid,
  phoneValid,
  returnEmptyObject,
} from 'src/app/utilities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  private authService = authService;
  public loggedIn: UserWithType;

  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  address: string | undefined;

  message: string | undefined;

  ngOnInit() {
    this.message = '';
  }

  constructor(private location: Location, private router: Router) {
    const logged = this.authService.getLoggedUser();
    this.loggedIn = logged ?? returnEmptyObject();

    this.username = this.loggedIn.username;
    this.password = this.loggedIn.password;
    this.email = this.loggedIn.email;
    this.firstName = this.loggedIn.first_name;
    this.lastName = this.loggedIn.last_name;
    this.phone = this.loggedIn.phone;
    this.address = this.loggedIn.address;

    console.log(this.loggedIn);
  }

  saveChange() {
    if (
      this.username === this.loggedIn.username &&
      this.password === this.loggedIn.password &&
      this.firstName === this.loggedIn.first_name &&
      this.lastName === this.loggedIn.last_name &&
      this.phone === this.loggedIn.phone &&
      this.address === this.loggedIn.address
    )
      this.message = undefined;
    const data = {
      username: this.username,
      password: this.password,
      email: this.email,
      first_name: this.firstName,
      last_name: this.lastName,
      phone: this.phone,
      address: this.address,
    } as UserData;

    this.validateInput(data);

    if (!this.message) {
      this.authService.updateUser(data);
      this.message = 'Promena je sačuvana uspešno!';
    }
  }

  private validateInput(data: UserData): void {
    if (emptyFields(data)) this.message = RegisterErrors.EMPTY_INPUT;

    if (!emailValid(this.email ?? ''))
      this.message = RegisterErrors.INVALID_EMAIL;

    if (!phoneValid(this.phone ?? ''))
      this.message = RegisterErrors.INVALID_PHONE;

    if (!passwordValid(this.password ?? ''))
      this.message = RegisterErrors.INVALID_PASSWORD;

    if (
      !(
        otherFieldsValid(this.firstName ?? '') &&
        otherFieldsValid(this.lastName ?? '') &&
        otherFieldsValid(this.address ?? '') &&
        otherFieldsValid(this.username ?? '')
      )
    )
      this.message = RegisterErrors.INVALID_FIELD;
  }

  return(): void {
    this.location.back();
  }

  disableButton() {
    return (
      this.username === this.loggedIn.username &&
      this.password === this.loggedIn.password &&
      this.firstName === this.loggedIn.first_name &&
      this.lastName === this.loggedIn.last_name &&
      this.phone === this.loggedIn.phone &&
      this.address === this.loggedIn.address
    );
  }

  logout() {
    console.log('logout');
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
