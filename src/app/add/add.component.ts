import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntrepotService} from "../services/entrepot.service";
import {Router} from "@angular/router";
import {Entrepot} from "../model/entrepot";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  entrepotForm!: FormGroup;
  showSuccessMessage: boolean = false;
  hideSuccessMessage() {
    this.showSuccessMessage = false;
  };

  entrepotObj: Entrepot = {
    id: '',
    libelle: '',
    superficie: 0,
    placer: '',
    longitude: '',
    latitude: 0
  }

  constructor(
    private fb: FormBuilder,
    private entrepotService: EntrepotService,
    private route: Router
  ) {
    this.entrepotForm = this.fb.group({
      libelle:['',Validators.required],
      superficie:['',Validators.required],
      placer:['',Validators.required],
      longitude:['',Validators.required],
      latitude:['',Validators.required],
    });
  }

  ngOnInit() {
  }

  addEntrepot(){
    const { value } = this.entrepotForm;
    console.log(value);
    this.entrepotObj.id = '';
    this.entrepotObj.libelle = value.libelle;
    this.entrepotObj.superficie = value.superficie;
    this.entrepotObj.placer = value.placer;
    this.entrepotObj.longitude = value.longitude;
    this.entrepotObj.latitude = value.latitude;

    this.entrepotService.addEntrepot(this.entrepotObj).then((entrepot) =>{
      if (entrepot){
        this.showSuccessMessage = true;
        //window.location.reload();
        this.entrepotForm.reset();
      }
    })
  }

}
