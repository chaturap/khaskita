import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Wpapi } from '../providers/wpapi';
import { CategoryPage } from '../pages/category/category';
import { IndexPage } from '../pages/index/index';
import { Page1 } from '../pages/page1/page1';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IndexPage;

  pages: any =[];
  isHome:boolean = false;

  constructor(public platform: Platform, private api: Wpapi) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   // this.pages = [
    //  { title: 'Page One', component: Page1 },
    //  { title: 'Page Two', component: Page2 }
    //];
api.category().subscribe(datas => {
  console.log(datas);
  for (let i of datas){
  this.pages.push({
  title: i.name,
  id: i.id
  })
  }
});

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.setRoot(CategoryPage, {
    id: page.id,
    title: page.title
    })
    this.isHome = true;
  }
  openHome(){
  this.nav.setRoot(IndexPage);
  this.isHome = false;
 }
}
