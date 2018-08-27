import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(public http: HttpClient) {
    console.log('Hello GroupsServiceProvider Provider');
  }

  getCategories()
  {
    return this.http.get(this.url + "/2/categories?key=3f3945471f6c544a7a2577724d4e2e55");
  }

  findGroupsByLocation(location)
  {
    return this.http.get(this.url + "/find/groups?key=3f3945471f6c544a7a2577724d4e2e55&location=johannesburg");
  }

}
