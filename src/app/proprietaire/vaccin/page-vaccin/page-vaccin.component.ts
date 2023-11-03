import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AjoutVaccinComponent } from '../ajout-vaccin/ajout-vaccin.component';
import { DetailVaccinComponent } from '../detail-vaccin/detail-vaccin.component';
@Component({
  selector: 'app-page-vaccin',
  templateUrl: './page-vaccin.component.html',
  styleUrls: ['./page-vaccin.component.scss']
})
export class PageVaccinComponent {
  dialogRef: MatDialogRef<AjoutVaccinComponent> | undefined;
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutVaccinComponent, {
      width: '550px',
      height: '560px',
      disableClose: true,
    });
  }
  closeDialog() {
    console.log('Fermeture du dialogue');
      if (this.dialogRef) {
        this.dialogRef.close();
      }
   }
  afficherDetail(): void {
    const dialogRef = this.dialog.open(DetailVaccinComponent , {
      width: '560px',
      height: '490px',
    });
  }
}
