import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAwaComponent } from './accueil-awa/accueil-awa.component';
import { AjoutProprietaireComponent } from './ajout-proprietaire/ajout-proprietaire.component';
import { ProfilEleveurComponent } from './profil-eleveur/profil-eleveur.component';
import { DefauldCategorieComponent } from './defauld-categorie/defauld-categorie.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';

const routes: Routes = [


  {
    path: 'accueil-awa',
    redirectTo: 'accueil-awa',
    pathMatch: 'full'
  },
  {
    path: 'accueil-awa', // URL pour la page 'accueil-awa'
    component: AccueilAwaComponent // Charge le composant AccueilAwaComponent
  },
  {
    path: 'ajout', // URL pour la page 'accueil-awa'
    component: AjoutProprietaireComponent // Charge le composant AccueilAwaComponent
  },
  {
    path: 'profil', // URL pour la page 'accueil-awa'
    component: ProfilEleveurComponent// Charge le composant AccueilAwaComponent
  },
  {
    path: 'defauld', // URL pour la page 'accueil-awa'
    component: DefauldCategorieComponent// Charge le composant AccueilAwaComponent
  },
  {
    path: 'newcategorie', // URL pour la page 'accueil-awa'
    component: AjoutCategorieComponent // Charge le composant AccueilAwaComponent
  },
  {
    path: 'modifier', // URL pour la page 'accueil-awa'
    component: ModifierEmployerComponent // Charge le composant AccueilAwaComponent
  },

  {
    path: 'modifiercate', // URL pour la page 'accueil-awa'
    component: ModifierCategorieComponent// Charge le composant AccueilAwaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
