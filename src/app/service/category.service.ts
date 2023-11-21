import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
 providedIn: 'root'
})
export class CategoryService {
 private categoryCollection: AngularFirestoreCollection<any>;
//  private selectedCategorySubject = new BehaviorSubject<Category | null>(null);
private selectedCategoryListSubject = new Subject<Category[]>();

  



 selectedCategoryList$: Observable<Category[]> = this.selectedCategoryListSubject.asObservable();
  private selectedCategories: Category[] = [];

  
 constructor(private firestore: AngularFirestore) { 
    this.categoryCollection = this.firestore.collection<any>('category');
 }

  getCategory(): Observable<{ categories: Category[]; numberOfRaces: number }> {
    return this.categoryCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(categories => ({
          categories,
          numberOfRaces: categories.length
        }))
      );
  }

  addCategory(category: Category): Promise<any> {
    return this.firestore.collection('category').add(category)
      .then(result => {
        console.log('Category ajoutée avec succès:', result);
        return result;
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de la catégorie:', error);
        throw error;
      });
  }

  updateCategory(id: string, data: any): Promise<void> {
    return this.categoryCollection.doc(id).update(data);
  }

  deleteCategory(id: string): Promise<void> {
    return this.categoryCollection.doc(id).delete()
      .catch(error => {
        console.error('Error deleting category:', error);
        throw error; // Rethrow the error after logging
      });
  }
  
  setSelectedCategoryList(categories: Category[]): void {
    console.log('Before emitting data. Existing data:', this.selectedCategories);
    this.selectedCategories = categories;
    this.selectedCategoryListSubject.next(categories);
    console.log('After emitting data. New data:', this.selectedCategories);
  }

  getSelectedCategoryList(): Observable<Category[]> {
    return this.selectedCategoryListSubject.asObservable();
  }

  // Ajoutez ou supprimez une catégorie
  addSelectedCategory(category: Category): void {
    this.selectedCategories = [...this.selectedCategories, category];
    this.setSelectedCategoryList(this.selectedCategories);
  }

  removeSelectedCategory(category: Category): void {
    this.selectedCategories = this.selectedCategories.filter(cat => cat.id !== category.id);
    this.setSelectedCategoryList(this.selectedCategories);
  }

 
  


  
}
