import { MainDirective } from './main.directive';
import { ElementRef } from '@angular/core';
import {TestBed} from '@angular/core/testing';

describe('MainDirective', () => {
  let elementRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef }]
    });
    elementRef = TestBed.get(ElementRef);
  });

  it('should create an instance', () => {
    const directive = new MainDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
