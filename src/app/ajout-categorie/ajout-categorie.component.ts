import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent {
  categorieForm: FormGroup;
  categories$: Observable<{ categories: Category[]; numberOfRaces: number }> | undefined;

  numberOfRaces: number | undefined;

     constructor(private dialogRef: MatDialogRef<AjoutCategorieComponent>,private fb: FormBuilder, private categoryService:CategoryService){
    this.categorieForm= this.fb.group({
      nom: [''],
      photocat: [''],
      photorace: [''],
      race: [''],
    });
  }
  annuler(): void {
    // Émettre le résultat "annuler" et fermer la boîte de dialogue
    this.dialogRef.close('annuler');
  }
  races: string[] = [''];  // Initialisez avec un champ "Race" par défaut

  ajouterRace(event: Event): void  {
    this.races.push('');  // Ajoutez un nouveau champ "Race" vide à la liste
    event.preventDefault();
  }
  ajouterCategory(): void {
    // Récupérer les données du formulaire
    const categoryData: Category = this.categorieForm.value;
    console.log(categoryData);

    // Appeler le service pour ajouter la catégorie
    this.categoryService.addCategory(categoryData)
      .then(() => {
        // Appeler la méthode getCategory pour obtenir les données à jour
        this.categoryService.getCategory().subscribe(data => {
          // Mettre à jour votre liste de catégories
          this.categories$ = this.categoryService.getCategory(); // Utilisez correctement la propriété
          this.numberOfRaces = data.numberOfRaces;
        });
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de la catégorie:', error);
        // Gérez l'erreur comme vous le souhaitez (par exemple, affichez un message à l'utilisateur)
      });
  }
  ImageChange(event: any) {
    this.categorieForm = event.target.files[0];
    // console.log(this.image);
  }
  //prévisualisation de l'image
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file= reader.result as string;
        this.categorieForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }
}