import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES } from 'src/app/constants/constants';
import { ADD_ANIMAL_EMPTY, PHOTO_ERROR } from 'src/app/constants/errors';
import { animalService, AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-operate-animals',
  templateUrl: './operate-animals.component.html',
  styleUrls: ['./operate-animals.component.css'],
})
export class OperateAnimalsComponent {
  public animalService: AnimalService = animalService;

  specie: string = '';
  latin: string = '';
  descent: string = '';
  population: string = '';
  lifespan: string = '';

  images = IMAGES;

  error: string | null = '';

  public selectedImage: any;

  constructor(private router: Router) {
    this.selectedImage = null;
  }

  addBorder(image: any) {
    if (this.selectedImage !== image) {
      if (this.selectedImage) {
        this.selectedImage.classList.remove('selected');
      }
      this.selectedImage = image;
      image.classList.add('selected');
    }
    // image.style.border = '2px solid brown';
  }

  addAnimal() {
    if (this.checkInvalid()) {
      this.error = this.checkInvalid();
      return;
    }
    const newAnimal = {
      specie: this.specie,
      latin: this.latin,
      descent: this.descent,
      population: this.population,
      lifespan: this.lifespan,
      img: this.selectedImage,
      comments: [],
    };

    this.animalService.saveNewAnimal(newAnimal);
    this.router.navigate(['/animal-added']);
  }

  checkInvalid() {
    if (this.specie.length <= 0) return ADD_ANIMAL_EMPTY;
    if (this.latin.length <= 0) return ADD_ANIMAL_EMPTY;
    if (this.descent.length <= 0) return ADD_ANIMAL_EMPTY;
    if (this.population.length <= 0) return ADD_ANIMAL_EMPTY;
    if (this.lifespan.length <= 0) return ADD_ANIMAL_EMPTY;
    if (!this.selectedImage) return PHOTO_ERROR;
    return null;
  }
}
