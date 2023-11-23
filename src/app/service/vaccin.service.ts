import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vaccin } from '../model/vaccin';
import { Category } from '../model/category';
import { Subject } from 'rxjs';
import { CategoryService } from './category.service';
import firebase from 'firebase/compat';
import 'firebase/firestore';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VaccinService {
  private vaccinCollection: AngularFirestoreCollection<Vaccin>;
  private categoryCollection: AngularFirestoreCollection<Category>;
  private dataRefreshSource = new Subject<void>();

  constructor(private firestore: AngularFirestore,
    private categoryService:CategoryService) { 
    this.vaccinCollection = this.firestore.collection<Vaccin>('vaccin');
    this.categoryCollection = this.firestore.collection<Category>('category');

  }
  // VaccinService


  dataRefresh$ = this.dataRefreshSource.asObservable();

  addVaccine(vaccin: Vaccin): Promise<firebase.firestore.DocumentReference> {
    const categories = vaccin.categories.map(category => ({ id: category.id, nom: category.nom }));
    const { categories: _, ...vaccineWithoutCategories } = vaccin;
    return this.vaccinCollection.add({ ...vaccineWithoutCategories, categories: categories as Category[] });

  }
  
  
  
  getVaccines(): Observable<{ vaccins: Vaccin[] }> {
    return this.vaccinCollection.valueChanges({ idField: 'id' }).pipe(
      map((vaccins) => ({ vaccins }))
    );
  }
  

  getVaccineCategories(vaccineId: string): Observable<Category[]> {
    return from(this.categoryCollection.ref.where('vaccines', 'array-contains', vaccineId).get())
      .pipe(
        map(snapshot => {
          const categories: Category[] = [];
          snapshot.forEach(doc => {
            categories.push({ categoryId: doc.id, ...doc.data() } as Category);
          });
          
          return categories;
        })
      );
  }
  
  updateVaccine(id: string, updatedVaccine: Partial<Vaccin>): Promise<void> {
    return this.vaccinCollection.doc(id).update(updatedVaccine);
  }

  // Delete a Vaccine
  deleteVaccine(id: string): Promise<void> {
    return this.vaccinCollection.doc(id).delete();
  }
  getVaccinById(id: string): Observable<Vaccin | undefined> {
    console.log('Fetching data for ID:', id);
    return this.vaccinCollection.doc<Vaccin>(id).valueChanges();
  }

  // addVaccineWithCategories(vaccine: Vaccin, categories: Category[]): Promise<void> {
  //   // Créez un tableau de catégories avec seulement les propriétés id, nom, et vaccins
    
  //   const categoriesArray: Category[] = categories.map(category => ({
  //     id: category.id,
  //     nom: category.nom,
  //     // vaccins: category.vaccins || []
      
  //   }));
  //   console.log('Adding vaccine with categories:', vaccine, categoriesArray);

  //   // Ajoutez le vaccin à la collection de vaccins avec le tableau de catégories comme champ
  //   return this.vaccinCollection.add({ ...vaccine, categories: categoriesArray }).then((docRef: firebase.firestore.DocumentReference) => {
  //     // Mettez à jour chaque catégorie avec le champ vaccins contenant l'id du vaccin
  //     const promises: Promise<void>[] = [];
  //     categories.forEach(category => {
  //       if (category.id) {
  //         promises.push(this.addVaccineToCategory(category.id, docRef.id));
  //       }
  //     });
  //     return Promise.all(promises).then(() => {});

  //   });
  // }
  
  
  
  
   addVaccineToCategory(categoryId: string, vaccinId: string): Promise<void> {
    if (categoryId) {
      console.log('Mise à jour de la catégorie avec vaccin :', categoryId, vaccinId);
      return this.categoryCollection.doc(categoryId).update({ vaccins: [vaccinId] });
    } else {
      console.error("L'ID de catégorie n'est pas défini.");
      return Promise.reject("L'ID de catégorie n'est pas défini.");
    }
  }
  
}

    
