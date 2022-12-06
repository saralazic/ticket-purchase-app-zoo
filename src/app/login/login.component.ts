import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from '../models/user';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private authService = authService;

  title = 'Zoo vrt Pandica';

  username: string | undefined;
  password: string | undefined;
  error: string | undefined;

  constructor(private router: Router) {}

  ngOnInit() {}

  loginUser() {
    this.error = undefined;
    if (this.username !== undefined && this.password !== undefined) {
      const credentials = { username: this.username, password: this.password };
      const user = this.authService.login(credentials);
      if (!user) this.error = 'Pogrešno korisničko ime ili lozinka!';
      else {
        if (user.getType() === UserType.visitor)
          this.router.navigate(['/visitor']);
        else this.router.navigate(['employee']);
      }
    }
  }
}
