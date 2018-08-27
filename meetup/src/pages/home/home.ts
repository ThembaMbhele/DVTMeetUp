import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupsServiceProvider } from '../../providers/groups-service/groups-service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DashboardPage } from '../dashboard/dashboard';

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
              private sqlite: SQLite) {
    this.groups.getCategories().subscribe((response: any) =>
    {
      var categoriess = response.results;
      this.categories = categoriess;

      this.navCtrl.setRoot(DashboardPage);
    });
  }

}
