import { Component } from '@angular/core';
import { initializeLocalStorage } from 'initial_data/init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Zoo vrt Pandica';

  ngOnInit() {
    initializeLocalStorage();
  }

  constructor() {}
}
