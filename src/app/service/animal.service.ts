import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Animal } from '../model/animal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalCollection: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore) { 
    this.animalCollection = this.firestore.collection<any>('animal');
  }

  addAnimal(animal: Animal): Promise<any> {
    const id = this.firestore.createId(); // Générer un nouvel ID pour l'animal
    return this.animalCollection.doc(id).set(animal)
      .then(result => {
        console.log('Animal ajouté avec succès:', result);
        return result;
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout de l\'animal:', error);
        throw error;
      });
  }
  
  getAnimal(): Observable<{ animals: Animal[]}> {
    return this.animalCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(animals => {
          console.log('Categories retrieved:', animals);
          return {
            animals,
          };
        })
      );
  }
}
