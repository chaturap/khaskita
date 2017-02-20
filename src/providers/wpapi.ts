import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
/*
  Generated class for the Wpapi provider.
 
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Wpapi {
 
  constructor(public http: Http) {
    console.log('Hello Wpapi Provider');
  }
 
  index(id){
    return this.http.get('https://carcinomatous-secti.000webhostapp.com/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
    .map(data => data.json());
  }
 
  search(keyword,id){
    return this.http.get("https://carcinomatous-secti.000webhostapp.com/wp/v2/posts?_embed&?filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page="+id)
    .map(data => data.json());
  }
 
  category(){
    return this.http.get('https://carcinomatous-secti.000webhostapp.com/wp-json/wp/v2/categories')
    .map(data => data.json());
  }
 
  posts_category(id,page){
    return this.http.get("https://carcinomatous-secti.000webhostapp.com/wp-json/wp/v2/posts?_embed&categories="+id+"&filter[order]=DESC&filter[posts_per_page]=5&page="+page)
    .map(data => data.json());
  }
 
}