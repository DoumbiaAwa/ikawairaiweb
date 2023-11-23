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
          raceControl.setValue(null);
        }
      });
    }
  }
  
  
  annuler(): void {
    this.dialogRef.close('annuler');
  }

  ajout(): void {
    const animalData = this.animalform.value;
    // Assure-toi d'avoir un modèle Animal correspondant à ta base de données
    this.animalService.addAnimal(animalData)
      .then(() => {
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error during animal addition:', error);
      });
  }
}
