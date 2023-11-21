import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerService } from 'src/app/service/employer.service';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-ajout-employer',
  templateUrl: './ajout-employer.component.html',
  styleUrls: ['./ajout-employer.component.scss']
})
export class AjoutEmployerComponent implements OnInit{
  employerForm!: FormGroup;

  constructor(private fb: FormBuilder, private employerService: EmployerService,private dialogRef: MatDialogRef<AjoutEmployerComponent>) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.employerForm = this.fb.group({
      nom: ['', Validators.required],
      numero: ['', Validators.required],
      adresse: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  addEmployer(): void {
    if (this.employerForm.valid) {
      const newEmployer = this.employerForm.value;
  
      this.employerService.addEmployer(newEmployer)
        .then(response => {
          console.log('Employer added successfully:', response);
          this.employerForm.reset(); // Reset the form after successful addition
        })
        .catch(error => {
          console.error('Error adding employer:', error);
        });
    }
}
annuler(): void {
  // Émettre le résultat "annuler" et fermer la boîte de dialogue
  this.dialogRef.close('annuler');
}
}