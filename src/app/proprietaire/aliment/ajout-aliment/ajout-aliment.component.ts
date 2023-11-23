// ajout-aliment.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentService } from 'src/app/service/aliment.service';
import { MatDialog } from '@angular/material/dialog';
import { ChoixRaceComponent } from '../../vaccin/choix-race/choix-race.component';
@Component({
  selector: 'app-ajout-aliment',
  templateUrl: './ajout-aliment.component.html',
  styleUrls: ['./ajout-aliment.component.scss']
})
export class AjoutAlimentComponent implements OnInit {
  alimentForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private dialog: MatDialog, private alimentService: AlimentService, private dialogRef: MatDialogRef<AjoutAlimentComponent>) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.alimentForm = this.fb.group({
      nom: ['', Validators.required],
      quantite: ['', Validators.required],
      uniter: ['', Validators.required],
      frequence: ['', Validators.required],
      prix: ['', Validators.required],
    });
  }
  addAliment(): void {
    if (this.alimentForm.valid) {
      const newAliment = this.alimentForm.value;
      console.log('Form value:', newAliment);
  
      this.alimentService.addAliment(newAliment)
        .then(() => {
          console.log('Aliment added successfully');
          this.alimentForm.reset();
          this.dialogRef.close(); // Close the dialog on success
        })
        .catch(error => {
          console.error('Error adding aliment:', error);
        });
    }
  }
  

  annuler(): void {
    this.dialogRef.close('annuler');
  }

 openDialog(event: Event): void {
  event.preventDefault();
  const dialogRef = this.dialog.open(ChoixRaceComponent, {
    width: '709px',
    height: '480px',
  });

}
}
