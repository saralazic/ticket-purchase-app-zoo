import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserData } from '../models/user';
import { authService } from '../services/auth.service';

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
    const authServiceResponse = this.authService.register(data);

    if (typeof authServiceResponse === 'string') {
      this.error = authServiceResponse;
    } else {
      this.router.navigate(['/visitor']);
    }
  }
}
