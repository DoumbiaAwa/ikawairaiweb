import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAwaComponent } from './accueil-awa/accueil-awa.component';
import { AjoutProprietaireComponent } from './ajout-proprietaire/ajout-proprietaire.component';
import { ProfilEleveurComponent } from './profil-eleveur/profil-eleveur.component';
import { DefauldCategorieComponent } from './defauld-categorie/defauld-categorie.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ModifierEmployerComponent } from './modifier-employer/modifier-employer.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
// import { TabsComponent } from './tabs/tabs.component';
import { LoginComponent } from './proprietaire/login/login.component';
import { PrincipalComponent } from './proprietaire/principal/principal.component';
import { AccueilProprioComponent } from './proprietaire/accueil-proprio/accueil-proprio.component';
import { EmployerProprioComponent } from './proprietaire/employer/ajout-employer/employer-proprio/employer-proprio.component';
import { AjoutEmployerComponent } from './proprietaire/employer/ajout-employer/ajout-employer.component';
import { DetailEmployerComponent } from './proprietaire/employer/ajout-employer/detail-employer/detail-employer.component';
import { ModifierComponent } from './proprietaire/employer/ajout-employer/modifier/modifier.component';
import { PageVaccinComponent } from './proprietaire/vaccin/page-vaccin/page-vaccin.component';
import { AjoutVaccinComponent } from './proprietaire/vaccin/ajout-vaccin/ajout-vaccin.component';
import { ChoixRaceComponent } from './proprietaire/vaccin/choix-race/choix-race.component';
import { DetailVaccinComponent } from './proprietaire/vaccin/detail-vaccin/detail-vaccin.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil-awa',
    pathMatch: 'full'
  },
  // {
  //   path: 'tabs', 
  //   component: TabsComponent 
  // },
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
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'proprio',
    component: AccueilProprioComponent
  },
  {
    path: 'employer',
    component: EmployerProprioComponent
  },
  {
    path: 'ajout-employer',
    component: AjoutEmployerComponent
  },
  {
    path: 'details-employer',
    component: DetailEmployerComponent
  },
  {
    path: 'modifier',
    component: ModifierComponent
  },
  {
    path: 'vaccin',
    component: PageVaccinComponent
  },
  {
    path: 'ajout-vaccin',
    component: AjoutVaccinComponent
  },
  {
    path: 'choix-race',
    component:ChoixRaceComponent
  },
  {
    path: 'detail-vaccin',
    component:DetailVaccinComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
