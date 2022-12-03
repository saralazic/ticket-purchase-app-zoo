import { Component, OnInit } from '@angular/core';
import { UserService } from './services/userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Zoo vrt Pandica';

  username: string | undefined; 
  password: string | undefined;

  ngOnInit(){
  }

  loginUser(){

  }
}
