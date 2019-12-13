import { Directive, HostListener, ElementRef } from '@angular/core';
import { ProfileComponent } from 'src/app/profile/profile.component';

@Directive({
  selector: '[[profileClickOutside]'
})
export class ProfileDirective {
  constructor(private elementRef: ElementRef, private component: ProfileComponent) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    // Check if the click was outside the element
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      this.component.suggestions = [];
    }
  }
}
