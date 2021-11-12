import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectOnFocusDirective } from './select-on-focus.directive';

@NgModule({
  declarations: [SelectOnFocusDirective],
  exports: [SelectOnFocusDirective],
  imports: [CommonModule],
})
export class SharedModule {}
