import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { animalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
})
export class AnimalsComponent {
  private animalService = animalService;

  public animals: Animal[] = []; // data source

  public items: Animal[] = [];
  public pageIndex = 0; // the current page
  public itemsPerPage = 5; // number of items per page
  public totalItems = 0; // total number of items

  constructor(private router: Router) {}

  ngOnInit() {
    this.animals = this.animalService.getAnimals();
    this.totalItems = this.animals.length;
    this.pageIndex = +(localStorage.getItem('pageIndex') || 0);
    console.log(this.pageIndex);
    this.items = this.getCurrentPageItems();
  }

  getCurrentPageItems(): Animal[] {
    const startIndex = this.pageIndex * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.animals.slice(startIndex, endIndex);
  }

  pageChanged(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    localStorage.setItem('pageIndex', event.pageIndex.toString());
    this.items = this.getCurrentPageItems();
  }

  displayAnimal(id: number) {
    const animalIndex = this.pageIndex * this.itemsPerPage + id;
    this.router.navigate([`animal`], { queryParams: { index: animalIndex } });
  }
}
