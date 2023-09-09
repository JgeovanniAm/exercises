import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardfoundComponent } from './cardfound.component';

describe('CardfoundComponent', () => {
  let component: CardfoundComponent;
  let fixture: ComponentFixture<CardfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
