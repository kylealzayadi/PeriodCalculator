import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VenusPage } from '../pages/venus/venus';
import { EarthPage } from '../pages/earth/earth';
import { MarsPage } from '../pages/mars/mars';
import { SunPage } from '../pages/sun/sun';
import { MoonPage } from '../pages/moon/moon';
import { JupiterPage } from '../pages/jupiter/jupiter';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MoonPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Moon', component: MoonPage },
      { title: 'Mars', component: MarsPage },
      { title: 'Venus', component: VenusPage },
      { title: 'Earth', component: EarthPage },
      { title: 'Jupiter', component: JupiterPage },
      { title: 'Sun', component: SunPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
