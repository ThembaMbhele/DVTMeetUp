import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupsServiceProvider } from '../../providers/groups-service/groups-service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DashboardPage } from '../dashboard/dashboard';
import { Storage } from '@ionic/storage';


interface Category {
  name: string;
  sort_name: string;
  shortname: string;
  id: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public categories: Category[];

  constructor(public navCtrl: NavController, public groups: GroupsServiceProvider,
              private storage: Storage) {
      
      this.navCtrl.setRoot(DashboardPage)
      // set a key/value
      //storage.set('name', 'Max');

      // Or to get a key/value pair
     /* storage.get('default').then((val) => {
        if(val == null)
        {
          storage.set('default', '');
          this.navCtrl.setRoot(DashboardPage);
        }
        else{
          this.navCtrl.setRoot(DashboardPage)
        }
      });*/
  }

}
