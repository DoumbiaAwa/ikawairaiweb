import { Component } from '@angular/core';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { MatDialog } from '@angular/material/dialog';
import { ModifierCategorieComponent } from '../modifier-categorie/modifier-categorie.component';
@Component({
  selector: 'app-defauld-categorie',
  templateUrl: './defauld-categorie.component.html',
  styleUrls: ['./defauld-categorie.component.scss']
})
export class DefauldCategorieComponent {
 

  constructor(private dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutCategorieComponent, {
      width: '480px',
      height: '79%', // Définissez la largeur de la boîte de dialogue
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }

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
