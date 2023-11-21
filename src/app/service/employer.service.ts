import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employer } from '../model/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private employerCollection: AngularFirestoreCollection<Employer>;

  constructor(private firestore: AngularFirestore) { 
    this.employerCollection = this.firestore.collection<Employer>('employer');
  }

  getEmployers(): Observable<{ employers: Employer[] }> {
    return this.employerCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(employers => ({
          employers: employers,
        }))
      );
  }

  addEmployer(employer: Employer): Promise<any> {
    return this.firestore.collection('employer').add(employer)
      .then(result => {
        console.log('Employer ajouté avec succès:', result);
        return result;
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'employeur', error);
        throw error;
      });
  }

  updateEmployer(id: string, data: any): Promise<void> {
    return this.employerCollection.doc(id).update(data);
  }

  deleteEmployer(id: string): Promise<void> {
    return this.employerCollection.doc(id).delete()
      .catch(error => {
        console.error('Erreur lors de la suppression de l\'employeur:', error);
        throw error;
      });
  }
  getEmployerById(id: string): Observable<Employer | undefined> {
    return this.employerCollection.doc<Employer>(id).valueChanges();
  }
  
}
