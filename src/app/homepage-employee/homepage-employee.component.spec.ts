import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEmployeeComponent } from './homepage-employee.component';

describe('HomepageEmployeeComponent', () => {
  let component: HomepageEmployeeComponent;
  let fixture: ComponentFixture<HomepageEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
