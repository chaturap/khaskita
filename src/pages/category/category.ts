import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wpapi } from '../../providers/wpapi';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  datas:any = [];
  title:string = this.navParams.data.title;
  constructor(public navCtrl: NavController, public navParams: NavParams, private api:Wpapi) {
  api.posts_category(navParams.data.id, 1).subscribe(datas => {
  this.datas = datas;
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
