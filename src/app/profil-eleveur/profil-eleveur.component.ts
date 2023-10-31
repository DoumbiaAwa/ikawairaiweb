import { Component } from '@angular/core';
import { ModifierEmployerComponent } from '../modifier-employer/modifier-employer.component';
import { MatDialog } from '@angular/material/dialog';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { ModifierCategorieComponent } from '../modifier-categorie/modifier-categorie.component';
@Component({
  selector: 'app-profil-eleveur',
  templateUrl: './profil-eleveur.component.html',
  styleUrls: ['./profil-eleveur.component.scss']
})
export class ProfilEleveurComponent {

  constructor(private dialog: MatDialog) {}
  // ajouter categogorie
  opencat(): void{
    const dialogRef = this.dialog.open(AjoutCategorieComponent, {
      width: '480px',
      height: '79%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }
  //modifier employer
  openDialog(): void {
    const dialogRef = this.dialog.open(ModifierEmployerComponent, {
      width: '528px',
      height: '96', // Définissez la largeur de la boîte de dialogue
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }

  //modifier categorie
  OpenModif(): void{
    const dialogRef=this.dialog.open(ModifierCategorieComponent,{
      width: '480px',
      height: '79%', 

    });
  }
  
  isActive = true;
  handleClick() {
    this.isActive = !this.isActive;
  }

}
