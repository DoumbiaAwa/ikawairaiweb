import { Component } from '@angular/core';
import { ModifierVenteComponent } from '../modifier-vente/modifier-vente.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-detail-vente',
  templateUrl: './detail-vente.component.html',
  styleUrls: ['./detail-vente.component.scss']
})
export class DetailVenteComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(event:Event): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ModifierVenteComponent, {
      width: '490px',
      height: '530px',
    });
  }
}
