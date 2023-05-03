import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  emailValid,
  emptyFields,
  otherFieldsValid,
  passwordValid,
  phoneValid,
} from 'src/app/utilities';
import { RegisterErrors } from '../../../constants/errors';
import { User, UserData } from '../../../models/user';
import { authService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private authService = authService;

  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  address: string | undefined;

  error: string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {}

  registerUser() {
    this.error = undefined;
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

    if (!this.error) {
      const authServiceResponse = this.authService.register(data);
      if (typeof authServiceResponse === 'string') {
        this.error = authServiceResponse;
      } else {
        this.router.navigate(['/homepage']);
      }
    }
  }

  private validateInput(data: UserData): void {
    if (emptyFields(data)) this.error = RegisterErrors.EMPTY_INPUT;

    if (!emailValid(this.email ?? ''))
      this.error = RegisterErrors.INVALID_EMAIL;

    if (!phoneValid(this.phone ?? ''))
      this.error = RegisterErrors.INVALID_PHONE;

    if (!passwordValid(this.password ?? ''))
      this.error = RegisterErrors.INVALID_PASSWORD;

    if (
      !(
        otherFieldsValid(this.firstName ?? '') &&
        otherFieldsValid(this.lastName ?? '') &&
        otherFieldsValid(this.address ?? '') &&
        otherFieldsValid(this.username ?? '')
      )
    )
      this.error = RegisterErrors.INVALID_FIELD;
  }
}
