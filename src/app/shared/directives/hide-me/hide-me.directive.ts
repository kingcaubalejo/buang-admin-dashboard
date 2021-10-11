import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hideMe]'
})
export class HideMeDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.display = 'none';
    console.log(el);
  }

}
