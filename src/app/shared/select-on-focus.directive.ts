import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[selectOnFocus]',
})
export class SelectOnFocusDirective {
  @HostListener('focus') onFocus() {
    this.element.nativeElement.select();
  }

  constructor(private element: ElementRef) {}
}
