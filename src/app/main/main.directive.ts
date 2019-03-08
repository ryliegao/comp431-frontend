import { Directive, HostListener, ElementRef } from '@angular/core';
import { MainComponent } from 'src/app/main/main.component';

@Directive({
  selector: '[appClickOutside]'
})
export class MainDirective {
  constructor(private elementRef: ElementRef, private component: MainComponent) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    // Check if the click was outside the element
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      this.component.closeTextarea();
    }
  }
}
