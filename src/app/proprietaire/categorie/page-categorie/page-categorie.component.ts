import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {
  categories$: Observable<{ categories: Category[]; numberOfRaces: number; }> | undefined; // Spécifiez le type correct
 

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getCategory(); // Obtenez les catégories du service
  }
  
  getAllRaces(category: Category): string {
    const uniqueRaces = new Set(category.races.map(race => race.race));
    return Array.from(uniqueRaces).join(', ');
  }
  
}
