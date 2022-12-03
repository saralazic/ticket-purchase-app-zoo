import { Component, OnInit } from '@angular/core';
import { authService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private authService = authService;

  title = 'Zoo vrt Pandica';

  username: string | undefined;
  password: string | undefined;
  error: string | undefined;

  ngOnInit() {}

  loginUser() {
    this.error = undefined;
    if (this.username !== undefined && this.password !== undefined) {
      const credentials = { username: this.username, password: this.password };
      const user = this.authService.login(credentials);
      if (!user) this.error = 'Pogrešno korisničko ime ili lozinka!';
    }
  }
}
