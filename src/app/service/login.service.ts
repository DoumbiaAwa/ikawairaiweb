import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Proprio } from '../model/proprio';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginCollection: AngularFirestoreCollection<any>;
  
  constructor(private afAuth: AngularFireAuth, private router: Router,private firestore: AngularFirestore) {
    this.loginCollection = this.firestore.collection<any>('login');
   }
   
  //  async login(email: string, password: string, code: string): Promise<Proprio | null> {
  //   try {
  //     const result = await this.afAuth.signInWithEmailAndPassword(email, password);

  //     // Si la connexion est réussie, vérifiez que l'utilisateur est un propriétaire
  //     const isProprio = await this.checkIfProprio(email, code);

  //     if (isProprio) {
  //       // Si c'est un propriétaire, récupérez les informations du propriétaire
  //       const proprio = await this.getProprioByEmailAndCode(email, code);
  //       return proprio;
  //     } else {
  //       // Si ce n'est pas un propriétaire, déconnectez l'utilisateur et renvoyez null
  //       await this.afAuth.signOut();
  //       console.error('Cet utilisateur n\'est pas un propriétaire.');
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error('Erreur de connexion:', error);
  //     return null;
  //   }
  // }

  // private async checkIfProprio(email: string, code: string): Promise<boolean> {
  //   try {
  //     const proprioSnapshot = await this.loginCollection.ref
  //       .where('email', '==', email)
  //       .where('code', '==', code)
  //       .get();

  //     return !proprioSnapshot.empty;
  //   } catch (error) {
  //     console.error('Erreur lors de la vérification si l\'utilisateur est un propriétaire:', error);
  //     return false;
  //   }
  // }

  // private async getProprioByEmailAndCode(email: string, code: string): Promise<Proprio | null> {
  //   try {
  //     const proprioSnapshot = await this.loginCollection.ref
  //       .where('email', '==', email)
  //       .where('code', '==', code)
  //       .get();

  //     if (!proprioSnapshot.empty) {
  //       const proprioData = proprioSnapshot.docs[0].data() as Proprio;
  //       return proprioData;
  //     }

  //     console.error('Aucun propriétaire trouvé pour l\'e-mail et le code donnés.');
  //     return null;
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des informations du propriétaire:', error);
  //     return null;
  //   }
  // }
}
