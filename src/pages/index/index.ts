import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Wpapi } from '../../providers/wpapi';
import { SinglePage } from '../single/single';


/*
  Generated class for the Index page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
datas:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Wpapi) {
  api.index(1).subscribe(datas => {
  this.datas = datas;
  });
  }


openSingle(url, title){
this.navCtrl.push(SinglePage, {
url: url,
title: title	
})	;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

}
