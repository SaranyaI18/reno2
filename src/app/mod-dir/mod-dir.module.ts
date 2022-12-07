import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreDirective } from './read-more.directive';
import { ApplyBtnDirective } from './apply-btn.directive';



@NgModule({
  declarations: [
    ReadMoreDirective,
    ApplyBtnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReadMoreDirective,
    ApplyBtnDirective
  ]
})
export class ModDirModule { }
