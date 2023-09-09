import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPComponent } from './counter-p.component';

describe('CounterPComponent', () => {
  let component: CounterPComponent;
  let fixture: ComponentFixture<CounterPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
