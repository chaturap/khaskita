import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CategoryPage } from '../pages/category/category'
import { IndexPage } from '../pages/index/index';
import { SinglePage } from '../pages/single/single';
import { Wpapi } from '../providers/wpapi';


@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    IndexPage,
    SinglePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    IndexPage,
    SinglePage
  ],
  providers: [Wpapi,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
