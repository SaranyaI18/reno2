import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appReadMore]'
})
export class ReadMoreDirective {

  constructor(e:ElementRef) {
    e.nativeElement.style.padding= "15px 20px";
    e.nativeElement.style.float="right";
   }

}
