import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateTicketsComponent } from './operate-tickets.component';

describe('OperateTicketsComponent', () => {
  let component: OperateTicketsComponent;
  let fixture: ComponentFixture<OperateTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
