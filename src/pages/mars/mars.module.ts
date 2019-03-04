import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarsPage } from './mars';

@NgModule({
  declarations: [
    MarsPage,
  ],
  imports: [
    IonicPageModule.forChild(MarsPage),
  ],
})
export class MarsPageModule {}
