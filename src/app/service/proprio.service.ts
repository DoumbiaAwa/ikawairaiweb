import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Proprio } from '../model/proprio';

@Injectable({
 providedIn: 'root'
})
export class ProprioService {
 private proprioCollection: AngularFirestoreCollection<any>;

 constructor(private firestore: AngularFirestore) {

    this.proprioCollection = this.firestore.collection<any>('proprio');
    // console.log('je suis la', this.proprioCollection )
 }

 getProprios(): Observable<any[]> {
    return this.proprioCollection.valueChanges({ idField: 'id' });
 }

 addProprio(proprio: Proprio): Promise<any> {
  console.log('Tentative d\'ajout de proprio:', proprio);
  // Assurez-vous que 'proprio' est bien passé à la méthode 'add'
  return this.firestore.collection('proprio').add(proprio)
    .then(result => {
      console.log('Proprio ajouté avec succès:', result);
      return result;
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout du proprio:', error);
      throw error;  // Propagez l'erreur pour la gérer dans le composant
    });
}

 updateProprio(id: string, data: any): Promise<void> {
    return this.proprioCollection.doc(id).update(data);
 }

 deleteProprio(id: string): Promise<void> {
    return this.proprioCollection.doc(id).delete();
 }
 verifierCodeUnique(code: string): Observable<boolean> {
  // Vérifiez si le code existe déjà dans la collection
  return this.firestore.collection('proprio', ref => ref.where('codeGenere', '==', code))
    .get()
    .pipe(
      map(snapshot => snapshot.empty)
    );
}
getProprioById(id: string): Observable<Proprio | undefined> {
  return this.proprioCollection.doc(id).valueChanges();
}
}