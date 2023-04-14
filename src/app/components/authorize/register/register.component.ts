import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    if (this.emptyFields(data)) this.error = RegisterErrors.EMPTY_INPUT;

    if (!this.emailValid(this.email ?? ''))
      this.error = RegisterErrors.INVALID_EMAIL;

    if (!this.phoneValid(this.phone ?? ''))
      this.error = RegisterErrors.INVALID_PHONE;

    if (!this.paswordValid(this.password ?? ''))
      this.error = RegisterErrors.INVALID_PASSWORD;

    if (
      !(
        this.otherFieldsValid(this.firstName ?? '') &&
        this.otherFieldsValid(this.lastName ?? '') &&
        this.otherFieldsValid(this.address ?? '') &&
        this.otherFieldsValid(this.username ?? '')
      )
    )
      this.error = RegisterErrors.INVALID_FIELD;
  }

  private emptyFields(data: UserData): boolean {
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

  private paswordValid(pass: string): boolean {
    return (
      /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(pass) &&
      /^[a-zA-Z]/.test(pass)
    );
  }

  private emailValid(email: string): boolean {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email
    );
  }

  private phoneValid(phone: string): boolean {
    return (
      /^(060|061|062|063|066|067)\d{7}$/.test(phone) || /^(0)\d{8}$/.test(phone)
    );
  }

  private otherFieldsValid(field: string): boolean {
    if (field.length < 3) return false;
    return true;
  }
}
