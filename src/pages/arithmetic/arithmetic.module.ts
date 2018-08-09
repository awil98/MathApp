import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArithmeticPage } from './arithmetic';

@NgModule({
  declarations: [
    ArithmeticPage,
  ],
  imports: [
    IonicPageModule.forChild(ArithmeticPage),
  ],
})
export class ArithmeticPageModule {}
