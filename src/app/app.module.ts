import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AngularFireModule} from '@angular/fire/compat'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"auth-example-82cc1","appId":"1:882041641141:web:1795b05ad159b93a13c6fc","storageBucket":"auth-example-82cc1.appspot.com","apiKey":"AIzaSyCEdpMum7nYAoJSCLEwww7j4N2jrpjPL44","authDomain":"auth-example-82cc1.firebaseapp.com","messagingSenderId":"882041641141","measurementId":"G-DCDCGX0DSS"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
