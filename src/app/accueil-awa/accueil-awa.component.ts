import { Component } from '@angular/core';
import { AjoutProprietaireComponent } from '../ajout-proprietaire/ajout-proprietaire.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-accueil-awa',
  templateUrl: './accueil-awa.component.html',
  styleUrls: ['./accueil-awa.component.scss']
})
export class AccueilAwaComponent {
  constructor(private dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutProprietaireComponent, {
      width: '528px',
      height: '500px', // Définissez la largeur de la boîte de dialogue
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }
  isActive = true;

  // Fonction pour gérer le clic de l'utilisateur
  handleClick() {
    this.isActive = !this.isActive;
  }

}
