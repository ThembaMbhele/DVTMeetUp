import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { GroupdetailsPage } from '../pages/groupdetails/groupdetails';

import { HttpClientModule } from '@angular/common/http';
import { GroupsServiceProvider } from '../providers/groups-service/groups-service';

import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalvariablesProvider } from '../providers/globalvariables/globalvariables';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    GroupdetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    GroupdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GroupsServiceProvider,
    SQLite,
    GlobalvariablesProvider
  ]
})
export class AppModule {}
