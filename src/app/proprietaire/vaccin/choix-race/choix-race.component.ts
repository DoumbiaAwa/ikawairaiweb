import { Component, OnInit, Inject, forwardRef, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';
import { VaccinService } from 'src/app/service/vaccin.service';
import { Vaccin } from 'src/app/model/vaccin';
import { AjoutVaccinComponent } from '../ajout-vaccin/ajout-vaccin.component';
import { Category } from 'src/app/model/category';

@Component({
 selector: 'app-choix-race',
 templateUrl: './choix-race.component.html',
 styleUrls: ['./choix-race.component.scss']
})
export class ChoixRaceComponent implements OnInit {
  categories: Category[] = [];
  selectedCategories: Category[] = [];

  constructor(
    private dialogRef: MatDialogRef<ChoixRaceComponent>, 
    private categoryService: CategoryService,
    private vaccinService: VaccinService,
    private cdr: ChangeDetectorRef
  ) {}

  fermerDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      data => {
        this.categories = data.categories;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  
    this.categoryService.getSelectedCategoryList().subscribe(
      selectedCategories => {
        this.selectedCategories = selectedCategories;
        console.log('Catégories sélectionnées :', this.selectedCategories);
      },
      error => {
        console.error('Error fetching selected categories:', error);
      }
    );
  }
  

  // async selectedCategory(category: Category): Promise<void> {
  //   await this.categoryService.setSelectedCategoryList([category]);
  //   this.updateSelectedCategories();
  // }

  async selectedCategory(category: Category): Promise<void> {
    await this.categoryService.setSelectedCategoryList([category]);
    this.updateSelectedCategories();
  }

  updateSelectedCategories(): void {
    this.categoryService.getSelectedCategoryList().subscribe(selectedCategories => {
      this.selectedCategories = selectedCategories;
    });
  }

  enregistrer(): void {
    this.selectedCategories.forEach(category => {
      this.categoryService.addSelectedCategory(category);
    });
  }
}
