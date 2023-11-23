import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoixRaceComponent } from '../choix-race/choix-race.component';
import { MatDialogRef } from '@angular/material/dialog';
import { VaccinService } from 'src/app/service/vaccin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';

@Component({
 selector: 'app-ajout-vaccin',
 templateUrl: './ajout-vaccin.component.html',
 styleUrls: ['./ajout-vaccin.component.scss'],
 providers: [CategoryService],
})
export class AjoutVaccinComponent implements OnInit {
 vaccinForm!: FormGroup;
 selectedCategories: Category[] = [];
 categories: Category[] = [];

 constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AjoutVaccinComponent>,
    private vaccinService: VaccinService,
    private fb: FormBuilder,
    private categoryService: CategoryService
 ) { }

 ngOnInit(): void {
  console.log('Component initialized');
  this.initializeForm();
  this.loadCategories();
}


 initializeForm(): void {
    this.vaccinForm = this.fb.group({
      nom: ['', Validators.required],
      date: ['', Validators.required],
      prix: ['', Validators.required],
    });
 }

 loadCategories(): void {
  this.categoryService.getCategory().subscribe(
    data => {
      this.categories = data.categories;
      console.log('Catégories récupérées :', this.categories);
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


updateSelectedCategories(): void {
  this.categoryService.getSelectedCategoryList().subscribe(
    selectedCategories => {
      this.selectedCategories = selectedCategories as Category[]; // Assurez-vous que selectedCategories est bien un tableau de catégories
    }
    
  );
}


addVaccin(): void {
  // if (this.vaccinForm.valid) {
  //   console.log('Adding vaccine with categories:', this.vaccinForm.value, this.selectedCategories);
  //   this.vaccinService.addVaccineWithCategories(this.vaccinForm.value, this.selectedCategories)
  //     .then(response => {
  //       console.log('Vaccin added successfully:', response);
  //       this.vaccinForm.reset();
  //       this.dialogRef.close('enregistrer');
  //     })
  //     .catch(error => {
  //       console.error('Error adding vaccin:', error);
  //     });
  // }
}

openDialog(event: Event): void {
  event.preventDefault();
  const dialogRef = this.dialog.open(ChoixRaceComponent, {
    width: '709px',
    height: '480px',
  });
  dialogRef.afterClosed().subscribe((result: Category[]) => {
    console.log('Selected categories from dialog:', result);
    // Vous pouvez traiter les catégories sélectionnées ici si nécessaire
  });
}

 annuler(): void {
    this.dialogRef.close('annuler');
 }
}