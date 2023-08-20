import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntrepotComponent} from "./entrepot/entrepot.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {AddComponent} from "./add/add.component";
import {AuthGuardGuard} from "./auth/authGuard.guard";


const routes:Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"entrepot", component: EntrepotComponent,canActivate: [AuthGuardGuard],children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {path:"list", component: ListComponent},
      {path:"add", component: AddComponent}
    ]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
