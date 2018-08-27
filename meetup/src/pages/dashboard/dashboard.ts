import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsServiceProvider } from '../../providers/groups-service/groups-service';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public meetUpGroups: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private group: GroupsServiceProvider) 
  {
    this.group.findGroupsByLocation("johannesburg").subscribe((response: any[])=>{
        var meetUpGroups = response
        this.meetUpGroups = meetUpGroups;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToSettings()
  {
    this.navCtrl.push(SettingsPage);
  }

}
