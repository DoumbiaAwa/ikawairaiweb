import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { AngularFireModule } from 'angularfire2';
import { Auth } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AppComponent } from './app.component';
// @ts-ignore
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AccueilAwaComponent } from './accueil-awa/accueil-awa.component';
import { DefauldCategorieComponent } from './defauld-categorie/defauld-categorie.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { ProfilEleveurComponent } from './profil-eleveur/profil-eleveur.component';
import { AjoutProprietaireComponent } from './ajout-proprietaire/ajout-proprietaire.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { AccueilProprioComponent } from './proprietaire/accueil-proprio/accueil-proprio.component';
import { LoginComponent } from './proprietaire/login/login.component';
import { PrincipalComponent } from './proprietaire/principal/principal.component';
import { AjoutEmployerComponent } from './proprietaire/employer/ajout-employer/ajout-employer.component';
import { PageVaccinComponent } from './proprietaire/vaccin/page-vaccin/page-vaccin.component';
import { AjoutVaccinComponent } from './proprietaire/vaccin/ajout-vaccin/ajout-vaccin.component';
import { DetailVaccinComponent } from './proprietaire/vaccin/detail-vaccin/detail-vaccin.component';
import { ChoixRaceComponent } from './proprietaire/vaccin/choix-race/choix-race.component';
import { PageAlimentComponent } from './proprietaire/aliment/page-aliment/page-aliment.component';
import { AjoutAlimentComponent } from './proprietaire/aliment/ajout-aliment/ajout-aliment.component';
import { PageCategorieComponent } from './proprietaire/categorie/page-categorie/page-categorie.component';
import { DetailCategorieComponent } from './proprietaire/categorie/detail-categorie/detail-categorie.component';
import { PageAnimauxComponent } from './proprietaire/animaux/page-animaux/page-animaux.component';
import { DetailAnimalComponent } from './proprietaire/animaux/modifier-animal/detail-animal.component';
import { AjoutAnimalComponent } from './proprietaire/animaux/ajout-animal/ajout-animal.component';
import { PageTacheComponent } from './proprietaire/tache/page-tache/page-tache.component';
import { AjoutTacheComponent } from './proprietaire/tache/ajout-tache/ajout-tache.component';
import { PageVenteComponent } from './proprietaire/vente/page-vente/page-vente.component';
import { AjoutVenteComponent } from './proprietaire/vente/ajout-vente/ajout-vente.component';
import { DetailVenteComponent } from './proprietaire/vente/detail-vente/detail-vente.component';
import { PageNotifComponent } from './proprietaire/notification/page-notif/page-notif.component';
import { NotifPerteComponent } from './proprietaire/notification/notif-perte/notif-perte.component';
import { EmployerProprioComponent } from './proprietaire/employer/employer-proprio/employer-proprio.component';
import { DetailEmployerComponent } from './proprietaire/employer/detail-employer/detail-employer.component';
import { ModifierComponent } from './proprietaire/employer/modifier/modifier.component';
import { ModifierVenteComponent } from './proprietaire/vente/modifier-vente/modifier-vente.component';
import { BarreComponent } from './barre/barre.component';
// import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SelectComponent } from './select/select.component';
// import {Proprio} from './model/proprio';

@NgModule({
  declarations: [
    AppComponent,
    AccueilAwaComponent,
    DefauldCategorieComponent,
    ModifierEmployerComponent,
    ProfilEleveurComponent,
    AjoutProprietaireComponent,
    AjoutCategorieComponent,

    ModifierCategorieComponent,
    AccueilProprioComponent,
    //LoginComponent,
    EmployerProprioComponent,
    PrincipalComponent,
    AjoutEmployerComponent,
    DetailEmployerComponent,
    PageVaccinComponent,
    AjoutVaccinComponent,
    // DetailVaccinComponent,
    ModifierComponent,
    ChoixRaceComponent,
    PageAlimentComponent,
    AjoutAlimentComponent,
    PageCategorieComponent,
    DetailCategorieComponent,
    PageAnimauxComponent,
    DetailAnimalComponent,
    AjoutAnimalComponent,
    PageTacheComponent,
    AjoutTacheComponent,
    PageVenteComponent,
    AjoutVenteComponent,
    DetailVenteComponent,
    PageNotifComponent,
    NotifPerteComponent,
    ModifierVenteComponent,
    BarreComponent,
    SelectComponent,
    //TabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    ReactiveFormsModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
