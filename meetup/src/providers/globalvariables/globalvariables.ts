import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/* A place to store variables that need to shared amongst pages */
@Injectable()
export class GlobalvariablesProvider {
  private location: string = "Johannesburg";
  private selectedGroup: any;
  private apiKey: string = "3f3945471f6c544a7a2577724d4e2e55";
  constructor() {
    console.log('Hello GlobalvariablesProvider Provider');
  }

  getApiKey()
  {
    return this.apiKey;
  }

  setLocation(location)
  {
    this.location = location;
  }

  setGroup(group)
  {
    this.selectedGroup = group;
  }

  getLocation()
  {
    return this.location;
  }

  getGroup()
  {
    return this.selectedGroup
  }

}
