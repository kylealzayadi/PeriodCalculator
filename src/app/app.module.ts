import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VenusPage } from '../pages/venus/venus';
import { EarthPage } from '../pages/earth/earth';
import { MarsPage } from '../pages/mars/mars';
import { JupiterPage } from '../pages/jupiter/jupiter';
import { MoonPage } from '../pages/moon/moon';
import { SunPage } from '../pages/sun/sun';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VenusPage,
    EarthPage,
    MarsPage,
    JupiterPage,
    MoonPage,
    SunPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VenusPage,
    EarthPage,
    MarsPage,
    JupiterPage,
    MoonPage,
    SunPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
