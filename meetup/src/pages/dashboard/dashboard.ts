import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsServiceProvider } from '../../providers/groups-service/groups-service';
import { GlobalvariablesProvider } from '../../providers/globalvariables/globalvariables';
import { SettingsPage } from '../settings/settings';
import { GroupdetailsPage } from '../groupdetails/groupdetails';
import { Storage } from '@ionic/storage';

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
  public description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private group: GroupsServiceProvider, private storage: Storage,
    private globalVariables: GlobalvariablesProvider) 
  {
    storage.get('default').then((val) => {
      if(val == null)
      {
        this.group.findGroupsByLocation().subscribe((response: any[])=>{
          var meetUpGroups = response;
          this.meetUpGroups = meetUpGroups;

        });
      }
      else
      {
        this.group.findGroupsByLocationAndCategory(val).subscribe((response: any[])=>{
          var meetUpGroups = response
          this.meetUpGroups = meetUpGroups;

          this.storage.get('defaultName').then((val)=>{
            this.description = val;
          })
        });
      }
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToSettings()
  {
    this.navCtrl.push(SettingsPage);
  }

  groupDetails(group)
  {
    this.globalVariables.setGroup(group);
    this.navCtrl.push(GroupdetailsPage);
  }

}
