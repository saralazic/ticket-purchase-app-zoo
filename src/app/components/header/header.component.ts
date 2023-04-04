import { Component } from '@angular/core';
import { UserWithType } from 'src/app/models/user';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private authService = authService;

  loggedUser: UserWithType | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    console.log(this.loggedUser);
  }
}
