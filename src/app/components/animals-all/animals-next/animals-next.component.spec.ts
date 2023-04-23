import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsNextComponent } from './animals-next.component';

describe('AnimalsNextComponent', () => {
  let component: AnimalsNextComponent;
  let fixture: ComponentFixture<AnimalsNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
