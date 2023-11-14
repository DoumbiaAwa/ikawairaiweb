import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private afAuth: AngularFireAuth, private router: Router) {

   }
   navigateAccueilAwa() {
    this.router.navigate(['/accueil-awa']);
  }
}
