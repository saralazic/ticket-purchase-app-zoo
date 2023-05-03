import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { animalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-added',
  templateUrl: './animal-added.component.html',
  styleUrls: ['./animal-added.component.css'],
})
export class AnimalAddedComponent {
  private animalService = animalService;

  public animal: Animal | null = null;

  ngOnInit() {
    this.animal = this.animalService.getAddedAnimal();
  }
}
