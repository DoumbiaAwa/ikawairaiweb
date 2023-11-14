import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProprioService } from '../service/proprio.service';
import { Proprio } from '../model/proprio';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-ajout-proprietaire',
  templateUrl: './ajout-proprietaire.component.html',
  styleUrls: ['./ajout-proprietaire.component.scss']
})
export class AjoutProprietaireComponent {
  proprioForm: FormGroup;
  codeGenere: string = ''; 
  proprios: Proprio[] = [];

  constructor(private proprioService: ProprioService, private fb: FormBuilder,private dialogRef: MatDialogRef<AjoutProprietaireComponent>) {
    this.proprioForm = this.fb.group({
      nom: [''],
      ferme: [''],
      email: [''],
      phone: [''],
      adresse: [''],
      password: [''],
      code: [''],
    });
  }
  ajouterProprio(): void {
    const codeAleatoire = this.genererCode();

    // Vérifier si le code est unique
    this.proprioService.verifierCodeUnique(codeAleatoire).subscribe((isUnique: boolean) => {
      if (isUnique) {
        // Mettre à jour la valeur du champ codeGeneré dans le formulaire
        this.proprioForm.patchValue({
          code: codeAleatoire
        });

        // Récupérer les données du formulaire
        const proprioData: Proprio = this.proprioForm.value;
console.log(proprioData)
     // Appeler le service pour ajouter le propriétaire
     this.proprioService.addProprio(proprioData).then(() => {
      // Appeler la méthode getProprios pour obtenir les données à jour
      this.proprioService.getProprios().subscribe(data => {
        // Mettre à jour votre liste de propriétaires
        this.proprios = data;
      });
    });
  } else {
    // Le code n'est pas unique, gérez cette situation (par exemple, affichez un message d'erreur)
    console.error('Le code généré n\'est pas unique. Veuillez réessayer.');
  }
    });
  }

  genererCode(): string {
    // Ajoutez ici votre logique pour générer le code
    // Exemple simple : une chaîne de 4 caractères aléatoires
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 6;
    let code = '';

    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    // Mettez à jour la variable codeGeneré avec le code généré
    this.codeGenere = code;
    console.log(this.codeGenere)
    return code;
   
  }
  annuler(): void {
    // Émettre le résultat "annuler" et fermer la boîte de dialogue
    this.dialogRef.close('annuler');
  }
}
