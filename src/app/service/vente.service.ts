import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Vente } from '../model/vente';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private venteCollection: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore) { 
    this.venteCollection = this.firestore.collection<any>('vente');
  }

  addVente(vente: Vente): Promise<any> {
    const id = this.firestore.createId(); // Générer un nouvel ID pour l'animal
    return this.venteCollection.doc(id).set(vente)
      .then(result => {
        console.log('Animal ajouté avec succès:', result);
        return result;
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'animal:', error);
        throw error;
      });
  }
  
  getVente(): Observable<{ ventes: Vente[]}> {
    return this.venteCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(ventes => {
          console.log('Categories retrieved:', ventes);
          return {
            ventes,
          };
        })
      );
  }
}












