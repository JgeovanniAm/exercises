import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWrapComponent } from './counter-wrap.component';

describe('CounterWrapComponent', () => {
  let component: CounterWrapComponent;
  let fixture: ComponentFixture<CounterWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
