import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAddedComponent } from './animal-added.component';

describe('AnimalAddedComponent', () => {
  let component: AnimalAddedComponent;
  let fixture: ComponentFixture<AnimalAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
