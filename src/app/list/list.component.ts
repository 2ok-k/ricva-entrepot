import { Component } from '@angular/core';
import {faChevronRight, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  trash = faTrash;
  edit = faEdit;
  arrowRight = faChevronRight;
  showArrow = true;
  showEditButton = false;

  toggleEdit() {
    this.showArrow = false;
    this.showEditButton = true;
  }

}
