import { Component, OnInit } from '@angular/core';
import { authService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private authService = authService;

  title = 'Zoo vrt Pandica';

  username: string | undefined; 
  password: string | undefined;

  ngOnInit(){
  }

  loginUser(){
    if (this.username !== undefined && this.password !== undefined)
    {
      const credentials = {username: this.username, password: this.password};
      this.authService.login(credentials);
    }
  }
}
