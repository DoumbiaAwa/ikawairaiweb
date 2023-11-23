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
import { EmployerProprioComponent } from './proprietaire/employer/employer-proprio/employer-proprio.component';
import { DetailEmployerComponent } from './proprietaire/employer/detail-employer/detail-employer.component';
import { LoginComponent } from './proprietaire/login/login.component';
import { PrincipalComponent } from './proprietaire/principal/principal.component';
import { AccueilProprioComponent } from './proprietaire/accueil-proprio/accueil-proprio.component';
import { AjoutEmployerComponent } from './proprietaire/employer/ajout-employer/ajout-employer.component';
import { ModifierComponent } from './proprietaire/employer/modifier/modifier.component';
import { PageVaccinComponent } from './proprietaire/vaccin/page-vaccin/page-vaccin.component';
import { AjoutVaccinComponent } from './proprietaire/vaccin/ajout-vaccin/ajout-vaccin.component';
import { ChoixRaceComponent } from './proprietaire/vaccin/choix-race/choix-race.component';
import { DetailVaccinComponent } from './proprietaire/vaccin/detail-vaccin/detail-vaccin.component';
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
import { ModifierVenteComponent } from './proprietaire/vente/modifier-vente/modifier-vente.component';
import { PageNotifComponent } from './proprietaire/notification/page-notif/page-notif.component';
import { NotifPerteComponent } from './proprietaire/notification/notif-perte/notif-perte.component';
import { BarreComponent } from './barre/barre.component';
import { SelectComponent } from './select/select.component';

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
    path: 'profil/:id',
    component: ProfilEleveurComponent
  },
  {
    path: 'detail/:id',
    component: DetailEmployerComponent
  },
  {
    path: 'vaccin/:id',
    component: DetailVaccinComponent
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
    component: ChoixRaceComponent
  },
  {
    path: 'detail-vaccin',
    component: DetailVaccinComponent
  },
  {
    path: 'aliment',
    component: PageAlimentComponent
  },
  {
    path: 'ajout-aliment',
    component: AjoutAlimentComponent
  },
  {
    path: 'categorie',
    component: PageCategorieComponent
  },
  {
    path: 'detail-categorie',
    component: DetailCategorieComponent
  },
  {
    path: 'animal',
    component: PageAnimauxComponent
  },
  {
    path: 'detail-animal',
    component: DetailAnimalComponent
  },
  {
    path: 'ajout-animal',
    component: AjoutAnimalComponent
  },
  {
    path: 'tache',
    component: PageTacheComponent
  },
  {
    path: 'ajout-tache',
    component: AjoutTacheComponent
  },
  {
    path: 'vente',
    component: PageVenteComponent
  },
  {
    path: 'ajout-vente',
    component: AjoutVenteComponent
  },
  {
    path: 'detail-vente',
    component: DetailVenteComponent
  },
  {
    path: 'modifier-vente',
    component: ModifierVenteComponent
  },
  {
    path: 'notification',
    component: PageNotifComponent
  },
  {
    path: 'perte',
    component: NotifPerteComponent
  },
  {
    path: 'barre',
    component: BarreComponent
  },
  {
    path: 'select',
    component: SelectComponent

  },
  // {
  //   path: 'aliment',
  //   component: AjoutAlimentComponent

  // },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
