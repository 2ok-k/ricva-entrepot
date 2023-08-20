import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EntrepotComponent } from './entrepot/entrepot.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSpinnerModule} from "ngx-spinner";
import {environment} from "../environments/environment";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "@angular/fire/auth-guard";
import {EntrepotService} from "./services/entrepot.service";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EntrepotComponent,
    AddComponent,
    ListComponent
  ],
    imports: [
      BrowserModule,
      FontAwesomeModule,
      RouterOutlet,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgxSpinnerModule,
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideFirestore(() => getFirestore())
    ],
  providers: [
    AuthService,
    AuthGuard,
    EntrepotService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
