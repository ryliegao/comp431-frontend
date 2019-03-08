import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElementRef } from '@angular/core';
import { MainDirective } from 'src/app/main/main.directive';
import { MainComponent } from 'src/app/main/main.component';
import { StorageService } from 'src/app/_services';

describe('MainDirective', () => {
  let elementRef: ElementRef;
  let component: MainComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MainComponent, StorageService, { provide: ElementRef } ]
    });
    elementRef = TestBed.get(ElementRef);
    component = TestBed.get(MainComponent);
  });

  it('should create an instance', () => {
    const directive = new MainDirective(elementRef, component);
    expect(directive).toBeTruthy();
  });
});
