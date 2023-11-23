import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { VenteService } from 'src/app/service/vente.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-ajout-vente',
  templateUrl: './ajout-vente.component.html',
  styleUrls: ['./ajout-vente.component.scss']
})
export class AjoutVenteComponent implements OnInit{

  venteform!: FormGroup;
  selectedCategory: Category | undefined;
  categories$: Observable<Category[]> = new Observable<Category[]>();
  race: string = '';

  constructor(
    private fb: FormBuilder,
    private categoryService:CategoryService,
    private venteService: VenteService,
    private dialogRef: MatDialogRef<AjoutVenteComponent>,
  ) {}
  initializeForm(): void {
    this.venteform = this.fb.group({
      categorie: ['', Validators.required],
      race: ['', Validators.required],
      nombre: ['', Validators.required],
      type: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.categories$ = this.categoryService.getCategory().pipe(
      map(result => result.categories)
    );
  
    this.selectedCategory = undefined;
    this.updateSelectedCategory();
    
  }
  
  updateSelectedCategory() {
    const categorieControl = this.venteform.get('categorie');
    const raceControl = this.venteform.get('race');
    if (categorieControl && raceControl) {
      categorieControl.valueChanges.pipe(
        switchMap((categoryId) => this.categoryService.getCategoryById(categoryId))
      ).subscribe((category) => {
        if (category) {
          this.selectedCategory = category;
          if (category.races && category.races.length > 0) {
            raceControl.setValue(category.races[0]); // Définir la première race de la catégorie
          } else {
            raceControl.setValue(null); // Aucune race disponible, réinitialiser la valeur
          }
        }
      });
    }
  }
  ajout(): void {
    const animalData = this.venteform.value;
    animalData.categorie = this.selectedCategory?.nom; // Utilisez le nom de la catégorie sélectionnée
    animalData.race = this.venteform.get('race')?.value?.race; // Utilisez la valeur sélectionnée de la race
    // Assurez-vous d'avoir un modèle Animal correspondant à votre base de données
    this.venteService.addVente(animalData)
      .then(() => {
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error during animal addition:', error);
      });
  }
  
}

















