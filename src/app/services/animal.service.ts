import { localStorageItems } from 'initial_data/init';
import { Animal } from '../models/animal';

export class AnimalService {
  constructor() {}

  public saveNewAnimal(animal: Animal) {
    const allAnimals = this.getAnimals();
    allAnimals.push(animal);
    this.saveAnimals(allAnimals);
  }

  public saveAnimalByIndex(animal: Animal | null, index: number) {
    const all = this.getAnimals();
    if (index < 0 || index >= all.length) return;
    all[index] = animal;
    this.saveAnimals(all);
  }

  public getAnimalByIndex(index: number): Animal | null {
    if (index < 0) return null;
    const allAnimals = this.getAnimals();
    if (index >= allAnimals.length) return null;
    return allAnimals[index];
  }

  public getAnimals() {
    const animals = localStorage.getItem(localStorageItems.ANIMALS);
    return animals ? JSON.parse(animals) : [];
  }

  private saveAnimals(animals: Animal[]) {
    localStorage.setItem(localStorageItems.ANIMALS, JSON.stringify(animals));
  }
}

export const animalService = new AnimalService();
