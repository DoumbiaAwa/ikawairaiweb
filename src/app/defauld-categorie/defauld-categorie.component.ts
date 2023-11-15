import { Component, OnInit } from '@angular/core';
import { AjoutCategorieComponent } from '../ajout-categorie/ajout-categorie.component';
import { MatDialog } from '@angular/material/dialog';
import { ModifierCategorieComponent } from '../modifier-categorie/modifier-categorie.component';
import { CategoryService } from '../service/category.service';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { of } from 'rxjs';
@Component({
  selector: 'app-defauld-categorie',
  templateUrl: './defauld-categorie.component.html',
  styleUrls: ['./defauld-categorie.component.scss']
})
export class DefauldCategorieComponent implements OnInit{
  categorys$: Observable<Category[]> = new Observable<Category[]>();
  numberOfRaces: number = 0;

  constructor(private dialog: MatDialog, private categoryService:CategoryService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutCategorieComponent, {
      width: '480px',
      height: '90%',
      disableClose: true 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }

  OpenModif(): void{
    const dialogRef=this.dialog.open(ModifierCategorieComponent,{
      width: '480px',
      height: '79%', 

    });

  }
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categorys$ = of(data.categories);
      this.numberOfRaces = data.numberOfRaces;
    });
  }
  supprimer(id: string): void {
    this.categoryService.deleteCategory(id)
      .then(() => {
        alert('Catégorie supprimée avec succès');
        // Mettez à jour votre liste de catégories ici si nécessaire
        this.refreshCategories();
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de la catégorie:', error);
        // Gérer l'erreur comme nécessaire
      });
  }
  refreshCategories(): void {
    this.categoryService.getCategory().subscribe(data => {
      this.categorys$ = of(data.categories);
      this.numberOfRaces = data.numberOfRaces;
    });
  }
   
  
  
}
