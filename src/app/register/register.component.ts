import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {}

  loginUser() {
    this.error = undefined;
    if (this.username !== undefined && this.password !== undefined) {
      const credentials = { username: this.username, password: this.password };
      const user = this.authService.login(credentials);
      if (!user) this.error = 'Pogrešni podaci!';
    }
  }
}
