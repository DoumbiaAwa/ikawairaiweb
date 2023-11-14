import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent {
  // categorieForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<AjoutCategorieComponent>,private fb: FormBuilder){}
  annuler(): void {
    // Émettre le résultat "annuler" et fermer la boîte de dialogue
    this.dialogRef.close('annuler');
  }
  races: string[] = [''];  // Initialisez avec un champ "Race" par défaut

  ajouterRace() {
    this.races.push('');  // Ajoutez un nouveau champ "Race" vide à la liste
  }
}
