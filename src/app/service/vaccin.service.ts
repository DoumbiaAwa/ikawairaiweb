import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vaccin } from '../model/vaccin';
import { Category } from '../model/category';
import { Subject } from 'rxjs';
import { CategoryService } from './category.service';
@Injectable({
  providedIn: 'root'
})
export class VaccinService {
  private vaccinCollection: AngularFirestoreCollection<Vaccin>;
  private dataRefreshSource = new Subject<void>();

  constructor(private firestore: AngularFirestore,
    private categoryService:CategoryService) { 
    this.vaccinCollection = this.firestore.collection<Vaccin>('vaccin');
  }
  // VaccinService

dataRefresh$ = this.dataRefreshSource.asObservable();


  // Create (Add) a Vaccine
  addVaccine(vaccine: Vaccin): Promise<DocumentReference<Vaccin>> {
    return this.vaccinCollection.add(vaccine);
  }

  // Read (Get) all Vaccines
  getVaccines(): Observable<{vaccins:Vaccin[]}> {
    return this.vaccinCollection.valueChanges({idField: 'id'})
    .pipe(
      map(vaccins => ({
        vaccins:vaccins,
      }))
    )
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

  // updateSelectedCategories(vaccineId: string, Categories: Category[]): Promise<void> {
  //   // Cast the object to Vaccin to resolve the type issue
  //   const updateData: Vaccin = { Categories };
  //   return this.vaccinCollection.doc(vaccineId).update(updateData);
  // }
  
  // // Method to get selected categories for a vaccine
  // getSelectedCategories(vaccineId: string): Observable<Category[] | undefined> {
  //   return this.vaccinCollection.doc<Vaccin>(vaccineId).valueChanges().pipe(
  //     map((vaccine: Vaccin | undefined) => vaccine?.Categories)
  //   );
  // }
}
