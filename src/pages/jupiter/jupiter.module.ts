import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JupiterPage } from './jupiter';

@NgModule({
  declarations: [
    JupiterPage,
  ],
  imports: [
    IonicPageModule.forChild(JupiterPage),
  ],
})
export class JupiterPageModule {}
