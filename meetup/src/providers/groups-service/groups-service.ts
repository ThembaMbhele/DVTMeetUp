import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GlobalvariablesProvider } from '../globalvariables/globalvariables';

/*
  Generated class for the GroupsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupsServiceProvider {

  /*this is the url for the proxy server. The proxy server will be used
     to get around CORS issues. The config can be found in the ionic.config.json file */
  private url: string = "/meetup";

  constructor(public http: HttpClient,private storage: Storage,
    private globalVariables: GlobalvariablesProvider) {
    console.log('Hello GroupsServiceProvider Provider');
  }

  getCategories()
  {
    return this.http.get(this.url + "/2/categories?key="+this.globalVariables.getApiKey());
  }

  findGroupsByLocationAndCategory(categoryId)
  {
    return this.http.get(this.url + "/find/groups?key="+this.globalVariables.getApiKey()+"&location=" 
                + this.globalVariables.getLocation() + "&category="+Number(categoryId));
  }

  findGroupsByLocation()
  {
    return this.http.get(this.url + "/find/groups?key="+this.globalVariables.getApiKey() +"&location=" +
    this.globalVariables.getLocation());
  }

}
