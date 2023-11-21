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
  styleUrls: ['./ajout-vaccin.component.scss']
})
export class AjoutVaccinComponent implements OnInit {
  vaccinForm!: FormGroup;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AjoutVaccinComponent>,
    private vaccinService: VaccinService,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  openDialog(event: Event): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(ChoixRaceComponent, {
      width: '709px',
      height: '480px',
    });
    dialogRef.afterClosed().subscribe((result: Category[]) => {
      // Vous pouvez traiter les catégories sélectionnées ici si nécessaire
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.vaccinForm = this.fb.group({
      nom: ['', Validators.required],
      date: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }

  addVaccin(): void {
    if (this.vaccinForm.valid) {
      // Appel de la méthode du service pour ajouter le vaccin
      this.vaccinService.addVaccine(this.vaccinForm.value)
        .then(response => {
          console.log('Vaccin added successfully:', response);

          // Réinitialiser le formulaire
          this.vaccinForm.reset();

          // Déclencher le rafraîchissement des données après avoir ajouté avec succès un vaccin

          // Fermer la boîte de dialogue après l'ajout réussi
          this.dialogRef.close('enregistrer');
        })
        .catch(error => {
          console.error('Error adding vaccin:', error);
        });
    }
  }

  annuler(): void {
    this.dialogRef.close('annuler');
  }
}
