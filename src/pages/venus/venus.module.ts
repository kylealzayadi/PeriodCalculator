import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenusPage } from './venus';

@NgModule({
  declarations: [
    VenusPage,
  ],
  imports: [
    IonicPageModule.forChild(VenusPage),
  ],
})
export class VenusPageModule {}
