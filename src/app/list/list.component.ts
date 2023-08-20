import {Component, OnInit} from '@angular/core';
import {faChevronRight, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Entrepot} from "../model/entrepot";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntrepotService} from "../services/entrepot.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  trash = faTrash;
  edit = faEdit;
  arrowRight = faChevronRight;
  showArrow = true;
  showEditButton = false;

  editForm!: FormGroup;
  entrepotDetail: any;
  entrepotData: any = [];
  showSuccessMessage: boolean = false;
  hideSuccessMessage() {
    this.showSuccessMessage = false;
  };
  entrepotToDelete: Entrepot | null = null;

  toggleEdit() {
    this.showArrow = false;
    this.showEditButton = true;
  }
  constructor(
    private fb: FormBuilder,
    private entrepotService: EntrepotService,
    private spinner: NgxSpinnerService,
    private route: Router
  ) {
    this.editForm = this.fb.group({
      edit_libelle:['',Validators.required],
      edit_superficie:['',Validators.required],
      edit_placer:['',Validators.required],
      edit_longitude:['',Validators.required],
      edit_latitude:['',Validators.required],
    })
  }

  ngOnInit() {
    this.getAllEntrepot();
  }


  getAllEntrepot(){
    this.spinner.show();
    this.entrepotService.getEntrepot().subscribe((res:Entrepot[]) => {
      console.log(res);
      this.entrepotData = res;
      this.spinner.hide();
    })
  }

  setEntrepotToDelete(entrepot: Entrepot) {
    this.entrepotToDelete = entrepot;
  }
  deleteEntrepot() {
    if (this.entrepotToDelete) {
      this.entrepotService.deleteEntrepot(this.entrepotToDelete).then(() => {
        this.showSuccessMessage = true;
        window.location.reload();
      });
    }
  }

  getAllDetails(entrepot: Entrepot){
    this.entrepotDetail = entrepot;
    this.editForm.reset({
      edit_libelle: entrepot.libelle,
      edit_superficie: entrepot.superficie,
      edit_placer: entrepot.placer,
      edit_longitude: entrepot.longitude,
      edit_latitude: entrepot.latitude
    });
  }

  updateEntrepot(entrepot: Entrepot){
    const {value} = this.editForm;
    const champsMisAJour: Partial<Entrepot> = {
      libelle: value.edit_libelle,
      superficie: value.edit_superficie,
      placer: value.edit_placer,
      longitude: value.edit_longitude,
      latitude: value.edit_latitude
    };
    this.entrepotService.updateEntrepot(entrepot,champsMisAJour).then(() => {
      this.showSuccessMessage = true;
      window.location.reload();
    })
    this.editForm.reset()
  }
}
