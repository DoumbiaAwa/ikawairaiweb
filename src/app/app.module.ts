import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilAwaComponent } from './accueil-awa/accueil-awa.component';
import { DefauldCategorieComponent } from './defauld-categorie/defauld-categorie.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { ProfilEleveurComponent } from './profil-eleveur/profil-eleveur.component';
import { AjoutProprietaireComponent } from './ajout-proprietaire/ajout-proprietaire.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    AccueilAwaComponent,
    DefauldCategorieComponent,
    ModifierEmployerComponent,
    ProfilEleveurComponent,
    AjoutProprietaireComponent,
    AjoutCategorieComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
