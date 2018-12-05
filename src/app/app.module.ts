import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Firebase } from '@ionic-native/firebase/ngx';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB6aJEBL2Es1Mw5YZalnDFbwrd5Ra_a7jA',
  authDomain: 'irp-demo.firebaseapp.com',
  databaseURL: 'https://irp-demo.firebaseio.com',
  projectId: 'irp-demo',
  storageBucket: 'irp-demo.appspot.com',
  messagingSenderId: '748809737188'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
