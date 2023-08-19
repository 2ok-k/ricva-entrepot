import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EntrepotComponent } from './entrepot/entrepot.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {RouterOutlet} from "@angular/router";

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
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
