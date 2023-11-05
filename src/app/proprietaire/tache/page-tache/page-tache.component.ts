import { Component } from '@angular/core';
import { AjoutTacheComponent } from '../ajout-tache/ajout-tache.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-page-tache',
  templateUrl: './page-tache.component.html',
  styleUrls: ['./page-tache.component.scss']
})
export class PageTacheComponent {
  constructor(private dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutTacheComponent, {
      width: '500px',
      height: '440px',
      disableClose: true,
    });
  }
}
