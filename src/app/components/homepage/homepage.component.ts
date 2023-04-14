import { Component } from '@angular/core';
import { UserWithType } from 'src/app/models/user';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  private authService = authService;

  loggedUser: UserWithType | null = null;

  constructor() {}
  ngOnInit(): void {
    this.loggedUser = this.authService.getLoggedUser();
    console.log(this.loggedUser);
  }
}
