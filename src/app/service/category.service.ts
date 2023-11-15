import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Category } from '../model/category';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryCollection: AngularFirestoreCollection<any>;
  private selectedCategorySubject = new Subject<Category | null>();
  private selectedCategoryListSubject = new Subject<Category[]>();
  // private selectedCategoryListSubject = new BehaviorSubject<Category[]>([]);
  selectedCategoryList$: Observable<Category[]> = this.selectedCategoryListSubject.asObservable();

  constructor(private firestore: AngularFirestore) { 
    this.categoryCollection = this.firestore.collection<any>('category');
    // console.log('je suis la', this.categoryCollection )
  }
  getCategory(): Observable<{ categories: Category[]; numberOfRaces: number }> {
    return this.categoryCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(categories => ({
          categories,
          numberOfRaces: categories.length  // Utilisez la longueur de la liste des catégories comme nombre de courses
        }))
      );
  }
 addCategory(category:Category): Promise<any> {
  console.log('Tentative d\'ajout de category:', category);
  // Assurez-vous que 'proprio' est bien passé à la méthode 'add'
  return this.firestore.collection('category').add(category)
    .then(result => {
      console.log('category ajouté avec succès:', result);
      return result;
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout du category:', error);
      throw error;  // Propagez l'erreur pour la gérer dans le composant
    });
}
updateCategory(id: string, data: any): Promise<void> {
  return this.categoryCollection.doc(id).update(data);
}

deleteCategory(id: string): Promise<void> {
  return this.categoryCollection.doc(id).delete()
    .catch(error => {
      console.error('Erreur lors de la suppression de la catégorie:', error);
      throw error;  // Propagez l'erreur pour la gérer dans le composant
    });
}

private selectedCategory: Category | undefined;

  // setSelectedCategory(category: Category): void {
  //   this.selectedCategory = category;
  // }

  getSelectedCategory(): Category | undefined {
    return this.selectedCategory;
  }
  setSelectedCategory(category: Category | null): any {
    this.selectedCategorySubject.next(category);
  }

  setSelectedCategoryList(categories: Category[]): void {
    this.selectedCategoryListSubject.next(categories);
  }
  getSelectedCategoryList(): Observable<Category[]> {
    return this.selectedCategoryList$;
  }
}
