import { Component } from '@angular/core';
import { AjoutAlimentComponent } from '../ajout-aliment/ajout-aliment.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-page-aliment',
  templateUrl: './page-aliment.component.html',
  styleUrls: ['./page-aliment.component.scss']
})
export class PageAlimentComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutAlimentComponent, {
      width: '555px',
      height: '650px',
      disableClose: true,
    });
  }

}
