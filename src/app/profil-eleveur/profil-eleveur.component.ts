import { Component, OnInit } from '@angular/core';
import { ModifierEmployerComponent } from '../modifier-employer/modifier-employer.component';
import { MatDialog } from '@angular/material/dialog';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { ModifierCategorieComponent } from '../modifier-categorie/modifier-categorie.component';
import { ActivatedRoute } from '@angular/router';
import { ProprioService } from '../service/proprio.service';
import { Proprio } from '../model/proprio';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { SelectComponent } from '../select/select.component';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';
@Component({
  selector: 'app-profil-eleveur',
  templateUrl: './profil-eleveur.component.html',
  styleUrls: ['./profil-eleveur.component.scss']
})
export class ProfilEleveurComponent implements OnInit {
  proprioId: string | null = null;
  proprio: Proprio | undefined;
  selectedCategories: Category[] = [];
  
  constructor(private dialog: MatDialog, private proprioService: ProprioService, private route: ActivatedRoute
    ,private categoryService:CategoryService) {

  }
  // ajouter categogorie
  opencat(): void {
    const dialogRef = this.dialog.open(SelectComponent, {
      width: '400px',
      height: '90%',
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }
  //modifier employer
  openDialog(): void {
    const dialogRef = this.dialog.open(ModifierEmployerComponent, {
      width: '528px',
      height: '96', // Définissez la largeur de la boîte de dialogue
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }

  //modifier categorie
  OpenModif(): void {
    const dialogRef = this.dialog.open(ModifierCategorieComponent, {
      width: '480px',
      height: '79%',

    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.proprioId = params['id'];
      if (this.proprioId) {
        this.proprioService.getProprioById(this.proprioId).subscribe(proprio => {
          this.proprio = proprio;
        });
      }
    });
    this.categoryService.setSelectedCategoryList([]);
    this.categoryService.getSelectedCategoryList().subscribe(selectedCategories => {
      this.selectedCategories = selectedCategories;
    });
  }

  loadProprio() {
    if (this.proprioId) {
      this.proprioService.getProprioById(this.proprioId)
        .subscribe(proprio => {
          this.proprio = proprio;
        });
    }
  }

  deleteProprio(): void {
    if (this.proprioId) {
      this.proprioService.deleteProprio(this.proprioId)
        .

        then(() => {
          console.log('Proprio deleted successfully');
          alert('Proprio deleted successfully');  // Show alert on successful deletion
          // Optionally: navigate to another page after deletion
        })
        .catch(error => {
          console.error('Error deleting proprio:', error);
          alert('Error deleting proprio');  // Show alert on error
        });
    }
  }


}
