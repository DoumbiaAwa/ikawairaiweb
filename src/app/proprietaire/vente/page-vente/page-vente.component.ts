import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutVenteComponent } from '../ajout-vente/ajout-vente.component';
import { DetailVenteComponent } from '../detail-vente/detail-vente.component';
@Component({
  selector: 'app-page-vente',
  templateUrl: './page-vente.component.html',
  styleUrls: ['./page-vente.component.scss']
})
export class PageVenteComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutVenteComponent, {
      width: '490px',
      height: '530px',
    });
  }
  detailVente() {
    const dialogRef = this.dialog.open(DetailVenteComponent, {
      width: '500px',
      height: '283px',
    });
  }

}
