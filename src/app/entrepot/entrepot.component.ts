import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Entrepot} from "../model/entrepot";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {EntrepotService} from "../services/entrepot.service";

@Component({
  selector: 'app-entrepot',
  templateUrl: './entrepot.component.html',
  styleUrls: ['./entrepot.component.css']
})
export class EntrepotComponent implements OnInit{
  @Output() isLogout = new EventEmitter<void>();
  userEmail!: string | null;
  isCreateMode: boolean = true;
  toggleMode() {
    this.isCreateMode = !this.isCreateMode;
  }

  constructor(
    private auth : AuthService) {
  }
  ngOnInit() {
    this.auth.getUserEmail().subscribe(email => {
      this.userEmail = email;
    });
  }


  logout() {
    this.auth.logout()
  }
}
