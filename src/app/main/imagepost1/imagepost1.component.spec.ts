import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagepost1Component } from './imagepost1.component';

describe('Imagepost1Component', () => {
  let component: Imagepost1Component;
  let fixture: ComponentFixture<Imagepost1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagepost1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagepost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
