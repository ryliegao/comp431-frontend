import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagepost2Component } from './imagepost2.component';

describe('Imagepost2Component', () => {
  let component: Imagepost2Component;
  let fixture: ComponentFixture<Imagepost2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagepost2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagepost2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
