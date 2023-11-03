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
import { MatIconModule } from '@angular/material/icon';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { AccueilProprioComponent } from './proprietaire/accueil-proprio/accueil-proprio.component';
import { LoginComponent } from './proprietaire/login/login.component';
import { EmployerProprioComponent } from './proprietaire/employer/ajout-employer/employer-proprio/employer-proprio.component';
import { PrincipalComponent } from './proprietaire/principal/principal.component';
import { AjoutEmployerComponent } from './proprietaire/employer/ajout-employer/ajout-employer.component';
import { DetailEmployerComponent } from './proprietaire/employer/ajout-employer/detail-employer/detail-employer.component';
import { PageVaccinComponent } from './proprietaire/vaccin/page-vaccin/page-vaccin.component';
import { AjoutVaccinComponent } from './proprietaire/vaccin/ajout-vaccin/ajout-vaccin.component';
import { DetailVaccinComponent } from './proprietaire/vaccin/detail-vaccin/detail-vaccin.component';
import { ModifierComponent } from './proprietaire/employer/ajout-employer/modifier/modifier.component';
import { ChoixRaceComponent } from './proprietaire/vaccin/choix-race/choix-race.component';
import { PageAlimentComponent } from './proprietaire/aliment/page-aliment/page-aliment.component';
import { AjoutAlimentComponent } from './proprietaire/aliment/ajout-aliment/ajout-aliment.component';
// import { TabsModule } from './tabs/tabs.module';
// import { TabsComponent } from './tabs/tabs.component';

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
    DetailVaccinComponent,
    ModifierComponent,
    ChoixRaceComponent,
    PageAlimentComponent,
    AjoutAlimentComponent,
    //TabsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    // TabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
