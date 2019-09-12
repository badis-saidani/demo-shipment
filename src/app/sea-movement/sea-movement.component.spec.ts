import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaMovementComponent } from './sea-movement.component';

describe('SeaMovementComponent', () => {
  let component: SeaMovementComponent;
  let fixture: ComponentFixture<SeaMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
