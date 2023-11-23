import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Employer } from 'src/app/model/employer';
import { EmployerService } from 'src/app/service/employer.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TacheService } from 'src/app/service/tache.service';
import { Tache } from 'src/app/model/tache';
@Component({
  selector: 'app-ajout-tache',
  templateUrl: './ajout-tache.component.html',
  styleUrls: ['./ajout-tache.component.scss']
})
export class AjoutTacheComponent implements OnInit{
  tacheform!: FormGroup;
  employes$: Observable<Employer[]> = new Observable<Employer[]>();
constructor( private dialogRef: MatDialogRef<AjoutTacheComponent>,
             private employerService:EmployerService,
             private tacheService:TacheService,
             private fb: FormBuilder,){}

  ngOnInit() {
     this.initializeForm();
    this.employes$ = this.employerService.getEmployers().pipe(
      map(result => result.employers)
    );
  }

  initializeForm(): void {
    this.tacheform = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      employer: ['', Validators.required],
      
    });
  }
annuler(): void {
  this.dialogRef.close('annuler');
}

addTache(): void {
  if (this.tacheform.valid) {
    const newTache: Tache = {
      titre: this.tacheform.value.titre,
      description: this.tacheform.value.description,
      employer: this.tacheform.value.employer,
    };

    this.tacheService.addTache(newTache)
      .then(response => {
        console.log('Tâche ajoutée avec succès :', response);
        this.tacheform.reset(); // Réinitialiser le formulaire après l'ajout réussi
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de la tâche :', error);
      });
  }
}




}












