import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStringOnly]'
})
export class StringOnlyDirective {
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
      let e = <KeyboardEvent> event;
      if (Number.isInteger(parseInt(e.key))) {
        e.preventDefault();
        window.alert("Please enter characters only!");
      }
  }
}