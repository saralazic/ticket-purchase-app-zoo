import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageVisitorComponent } from './homepage-visitor.component';

describe('HomepageVisitorComponent', () => {
  let component: HomepageVisitorComponent;
  let fixture: ComponentFixture<HomepageVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
