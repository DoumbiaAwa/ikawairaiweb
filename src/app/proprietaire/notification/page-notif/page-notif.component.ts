import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifPerteComponent } from '../notif-perte/notif-perte.component';
@Component({
  selector: 'app-page-notif',
  templateUrl: './page-notif.component.html',
  styleUrls: ['./page-notif.component.scss']
})
export class PageNotifComponent {
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(NotifPerteComponent, {
      width: '490px',
      height: '530px',
    });
  }
}
