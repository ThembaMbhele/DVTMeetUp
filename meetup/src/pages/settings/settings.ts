import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsServiceProvider } from '../../providers/groups-service/groups-service';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';

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
  public selectedCategory: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private group: GroupsServiceProvider, private storage: Storage) {
    this.group.getCategories().subscribe((response: any)=>{
        if(response != null)
          this.categories = response.results;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  save(selectedCategory)
  {
    this.storage.set('default', this.selectedCategory);
    var i: number = 0;
    for(i; i < this.categories.length; ++i)
    {
      if(this.categories[i].id == this.selectedCategory)
      this.storage.set('defaultName', this.categories[i].name);
    }
    

    this.navCtrl.setRoot(DashboardPage);
  }

}
