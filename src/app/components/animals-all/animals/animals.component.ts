import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMAL } from 'src/app/models/types';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent {
  constructor(private router: Router) {}

  displayAnimal(id: number) {
    console.log(id);
    this.router.navigate([`animal`]);
  }
}
