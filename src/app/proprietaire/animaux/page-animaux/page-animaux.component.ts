import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutAnimalComponent } from '../ajout-animal/ajout-animal.component';
import { DetailAnimalComponent } from '../modifier-animal/detail-animal.component';
@Component({
  selector: 'app-page-animaux',
  templateUrl: './page-animaux.component.html',
  styleUrls: ['./page-animaux.component.scss']
})
export class PageAnimauxComponent {
  constructor(private dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutAnimalComponent, {
      width: '495px',
      height: '590px',
      disableClose: true,
    });
  }
  openModifier(): void {
    const dialogRef = this.dialog.open(DetailAnimalComponent, {
      width: '495px',
      height: '590px',
      disableClose: true,
    });
  }
}


