import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextAutoFocus]'
})
export class TextAutofocusDirective implements OnInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
      this._elementRef.nativeElement.focus();
  }
}
