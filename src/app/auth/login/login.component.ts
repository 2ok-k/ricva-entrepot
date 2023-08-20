import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email : string = '';
  password1 : string = '';
  errorMessage1: string = '';

  errorMessage: string = '';

  showPassword: boolean = false;

  constructor(private auth: AuthService,private router :Router) {
    this.errorMessage = this.auth.getErrorMessage();
    this.auth.setErrorMessage('');
  }
  ngOnInit() {
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  login(){
    if (this.email == ''){
      this.errorMessage1 = 'Veuillez renseigner un email svp!';
      return;
    }
    if (this.password1 == ''){
      this.errorMessage1 = 'Veuillez renseigner un mot de passe svp!';
      return;
    }
    this.auth.login(this.email, this.password1).subscribe(
      () => {
        //tout est bon, redirection sur la page d'entrepôts
      },
      (error) => {
        // La connexion échoue, afficher le message d'erreur
        this.errorMessage1 = error;
      }
    );
    this.email = '';
    this.password1 = '';
  }

}
