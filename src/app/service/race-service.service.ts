import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Race } from '../model/race';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from './category.service';
import { catchError } from 'rxjs';
import { map } from 'rxjs';
import { throwError } from 'rxjs';
import { Category } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class RaceServiceService {
  private racesCollection: AngularFirestoreCollection<Race>; // Mettez à jour le type ici
  constructor(private firestore: AngularFirestore, 
    private http: HttpClient,
    private categoryService:CategoryService ) {
    this.racesCollection = this.firestore.collection<Race>('race');
  }

  

  
}
