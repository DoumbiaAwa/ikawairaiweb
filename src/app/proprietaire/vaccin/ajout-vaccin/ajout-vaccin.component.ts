import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoixRaceComponent } from '../choix-race/choix-race.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
 selector: 'app-ajout-vaccin',
 templateUrl: './ajout-vaccin.component.html',
 styleUrls: ['./ajout-vaccin.component.scss']
})
export class AjoutVaccinComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(event:Event): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ChoixRaceComponent, {
      width: '709px',
      height: '480px',
    });
  }

 
}
