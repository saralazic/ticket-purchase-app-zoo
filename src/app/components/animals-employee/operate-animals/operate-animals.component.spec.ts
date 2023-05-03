import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateAnimalsComponent } from './operate-animals.component';

describe('OperateAnimalsComponent', () => {
  let component: OperateAnimalsComponent;
  let fixture: ComponentFixture<OperateAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateAnimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
