import { NgModule }           from '@angular/core';
import { NgBoxComponent }   from './ngbox.component';
import { NgBoxDirective }   from './ngbox.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ CommonModule ],
  exports: [ NgBoxComponent, NgBoxDirective ],
  providers: [ ],
  declarations: [ NgBoxComponent, NgBoxDirective ],
})
export class NgBoxModule {}

