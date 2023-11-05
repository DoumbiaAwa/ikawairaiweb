import { Component } from '@angular/core';
import { ChoixRaceComponent } from '../../vaccin/choix-race/choix-race.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-ajout-aliment',
  templateUrl: './ajout-aliment.component.html',
  styleUrls: ['./ajout-aliment.component.scss']
})
export class AjoutAlimentComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(event:Event): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ChoixRaceComponent, {
      width: '709px',
      height: '480px',
    });
  }

}
