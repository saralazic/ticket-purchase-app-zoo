import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANIMAL_ERROR } from 'src/app/constants/errors';
import { Animal } from 'src/app/models/animal';
import { animalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css'],
})
export class AnimalPageComponent {
  private animalService = animalService;
  public error?: string;
  public animal: Animal | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // Object containing the query parameters
      console.log(params['index']); // Accessing a specific query parameter\
      const index = params['index'];
      if (index) {
        this.animal = this.animalService.getAnimalByIndex(index);
      } else this.error = ANIMAL_ERROR;
    });
  }
}
