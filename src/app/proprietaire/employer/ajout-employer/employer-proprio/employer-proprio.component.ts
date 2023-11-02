import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutEmployerComponent } from '../ajout-employer.component';
import { DetailEmployerComponent } from '../detail-employer/detail-employer.component';
@Component({
  selector: 'app-employer-proprio',
  templateUrl: './employer-proprio.component.html',
  styleUrls: ['./employer-proprio.component.scss']
})
export class EmployerProprioComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutEmployerComponent, {
      width: '550px',
      height: '560px',
    });
  }
  afficherDetail(): void {
    const dialogRef = this.dialog.open(DetailEmployerComponent, {
      width: '345px',
      height: '190px',
    });
  }
}
