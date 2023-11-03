import { Component } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
 selector: 'app-choix-race',
 templateUrl: './choix-race.component.html',
 styleUrls: ['./choix-race.component.scss']
})
export class ChoixRaceComponent {
  dialogRef: MatDialogRef<ChoixRaceComponent> | undefined;
  constructor(private dialog: MatDialog) {}

  fermerDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
}
}