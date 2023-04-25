import { localStorageItems } from 'initial_data/init';
import { Animal } from '../models/animal';

export class AnimalService {
  constructor() {}

  private saveAnimals(animals: Animal[]) {
    localStorage.setItem(localStorageItems.ANIMALS, JSON.stringify(animals));
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
}

export const animalService = new AnimalService();
