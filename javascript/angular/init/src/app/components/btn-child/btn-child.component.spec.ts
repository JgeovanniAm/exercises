import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnChildComponent } from './btn-child.component';

describe('BtnChildComponent', () => {
  let component: BtnChildComponent;
  let fixture: ComponentFixture<BtnChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
