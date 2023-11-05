import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModifierComponent } from '../modifier/modifier.component';
@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.scss']
})
export class DetailEmployerComponent {

  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModifierComponent, {
      width: '550px',
      height: '560px',
    });

  }
}