import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutVaccinComponent } from '../ajout-vaccin/ajout-vaccin.component';

@Component({
  selector: 'app-page-vaccin',
  templateUrl: './page-vaccin.component.html',
  styleUrls: ['./page-vaccin.component.scss']
})
export class PageVaccinComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutVaccinComponent, {
      width: '550px',
      height: '560px',
    });
  }
  // afficherDetail(): void {
  //   const dialogRef = this.dialog.open(DetailEmployerComponent, {
  //     width: '345px',
  //     height: '190px',
  //   });
  // }
}
