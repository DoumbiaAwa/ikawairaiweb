import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  categories: Category[] = [];
  selectedCategories: Category[] = [];

  constructor(private dialogRef: MatDialogRef<SelectComponent>, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data.categories;
    });
  }

  async selectedCategory(category: Category): Promise<void> {
    await this.categoryService.setSelectedCategoryList([category]);
    // Mettez à jour la liste des catégories sélectionnées
    this.updateSelectedCategories();
  }

  updateSelectedCategories(): void {
    this.categoryService.getSelectedCategoryList().subscribe(selectedCategories => {
      this.selectedCategories = selectedCategories;
      console.log('Catégories sélectionnées :', this.selectedCategories);
    });
  }

  enregistrer(): void {
    this.updateSelectedCategories();
    // Émettre le résultat "enregistrer" et fermer la boîte de dialogue
    this.dialogRef.close('enregistrer');
  }

  annuler(): void {
    // Émettre le résultat "annuler" et fermer la boîte de dialogue
    this.dialogRef.close('annuler');
  }
}
