import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { AnimalService } from 'src/app/service/animal.service';
@Component({
  selector: 'app-ajout-animal',
  templateUrl: './ajout-animal.component.html',
  styleUrls: ['./ajout-animal.component.scss']
})
export class AjoutAnimalComponent implements OnInit {
  animalform!: FormGroup;
  selectedCategory: Category | undefined;
  categories$: Observable<Category[]> = new Observable<Category[]>();
  race: string = '';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AjoutAnimalComponent>,
    private animalService:AnimalService,
    private categoryService:CategoryService
  ) {}

  initializeForm(): void {
    this.animalform = this.fb.group({
      categorie: ['', Validators.required],
      race: ['', Validators.required],
      nombre: ['', Validators.required],
      sexe: ['', Validators.required],
      etat: ['', Validators.required],
      age: [''],
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
    const categorieControl = this.animalform.get('categorie');
    const raceControl = this.animalform.get('race');
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
  
  
  annuler(): void {
    this.dialogRef.close('annuler');
  }

  ajout(): void {
    const animalData = this.animalform.value;
    animalData.categorie = this.selectedCategory?.nom; // Utilisez le nom de la catégorie sélectionnée
    animalData.race = this.animalform.get('race')?.value?.race; // Utilisez la valeur sélectionnée de la race
    // Assurez-vous d'avoir un modèle Animal correspondant à votre base de données
    this.animalService.addAnimal(animalData)
      .then(() => {
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error during animal addition:', error);
      });
  }
  
  
  
}
