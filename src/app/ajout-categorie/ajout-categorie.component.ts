import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent implements OnInit {
  categoryForm: FormGroup;
  categories$: Observable<{ categories: Category[]; numberOfRaces: number }> | undefined;

  constructor(
    private dialogRef: MatDialogRef<AjoutCategorieComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      nom: ['', Validators.required],
      races: this.fb.array([
        this.createRace()
      ])
    });
  }

 createRace(): FormGroup {
  return this.fb.group({
    race: ['', Validators.required]
  });
}

 addRace(event: Event): void {
  // const newIndex = this.races.length;
  this.races.push(this.createRace());
  event.preventDefault();
}

get races(): FormArray {
  return this.categoryForm.get('races') as FormArray;
}

  ngOnInit() {
    this.addRace(new Event('initialization'));
  }

  annuler(): void {
    // Close the dialog with the result "annuler"
    this.dialogRef.close('annuler');
  }
  
  
  ajouterCategory(): void {
    // Get the form data
    const categoryData: Category = this.categoryForm.value;
  
    this.categoryService
      .addCategory(categoryData)
      .then(() => {
        // Close the dialog
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error during category addition:', error);
        // Handle the error
      });
    console.log('Form value:', this.categoryForm.value);
  }
  getCategoryDetailsById(categoryId: string): void {
    this.categoryService.getCategoryById(categoryId)
      .subscribe((category: Category | undefined) => {
        if (category) {
          console.log('Category details by ID:', category);
          // Faire quelque chose avec les détails de la catégorie si nécessaire
        } else {
          console.log('Category not found for ID:', categoryId);
        }
      });
  }
  
}
