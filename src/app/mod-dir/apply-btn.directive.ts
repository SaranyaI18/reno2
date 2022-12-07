import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplyBtn]'
})
export class ApplyBtnDirective {

  constructor(e:ElementRef) {
    e.nativeElement.style.backgroundColor= "#FF8C00";
    e.nativeElement.style.color= "white";
    e.nativeElement.style.fontWeight= "bold";
   }

}
