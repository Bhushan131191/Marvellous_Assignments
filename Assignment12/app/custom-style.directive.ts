import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public eobj:ElementRef)

  {
    this.eobj.nativeElement.style.backgroundColor="yellow"
    this.eobj.nativeElement.style.fontWeight='bold'
  }

}
