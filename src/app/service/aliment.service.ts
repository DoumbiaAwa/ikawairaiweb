import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Aliment } from '../model/aliment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlimentService {
  private alimentCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) { 
    this.alimentCollection = this.firestore.collection<any>('aliments');
  }

   
  addAliment(aliment: Aliment): Promise<void> {
    return this.firestore.collection('aliments').add(aliment).then(() => {}); // Ajouter .then(() => {}) pour ne pas avoir de problème avec le type de retour.
  }


getAliments():  Observable<{aliments:Aliment[]}> {
  return this.alimentCollection.valueChanges({idField: 'id'})
    .pipe(
      map(aliments =>({
        aliments:aliments,
      }))
    );
}




// Mettre à jour un aliment dans la collection 'aliments'
updateAliment(id: string, aliment: Partial<Aliment>): Promise<void> {
  return this.firestore.collection('aliments').doc(id).update(aliment);
}

// Supprimer un aliment de la collection 'aliments'
deleteAliment(id: string): Promise<void> {
  return this.firestore.collection('aliments').doc(id).delete();
}
}
