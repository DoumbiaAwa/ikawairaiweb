import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Tache } from '../model/tache';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private tacheCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.tacheCollection = this.firestore.collection<any>('tache');
   }


   addTache(tache: Tache): Promise<any> {
    const id = this.firestore.createId(); // Générer un nouvel ID pour l'animal
    return this.tacheCollection.doc(id).set(tache)
      .then(result => {
        console.log('Animal ajouté avec succès:', result);
        return result;
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'animal:', error);
        throw error;
      });
  }
  
  getTache(): Observable<{ taches: Tache[]}> {
    return this.tacheCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(taches => {
          console.log('Categories retrieved:', taches);
          return {
            taches,
          };
        })
      );
  }
}
