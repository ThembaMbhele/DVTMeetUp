import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsServiceProvider } from '../../providers/groups-service/groups-service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public categories: any[]
  public selectedCategory: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private group: GroupsServiceProvider) {
    this.group.getCategories().subscribe((response: any)=>{
        this.categories = response.results;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
