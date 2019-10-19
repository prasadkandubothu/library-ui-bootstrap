import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective {

  constructor(private el : ElementRef) { }

}
