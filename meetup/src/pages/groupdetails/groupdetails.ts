import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvariablesProvider } from '../../providers/globalvariables/globalvariables';

/**
 * Generated class for the GroupdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupdetails',
  templateUrl: 'groupdetails.html',
})
export class GroupdetailsPage {

  public group: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private globalVariables: GlobalvariablesProvider) {
      this.group = this.globalVariables.getGroup();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupdetailsPage');
  }

}
