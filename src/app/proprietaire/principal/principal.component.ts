import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  isActive = true;

  menuItems: { [key: string]: boolean } = {
    tableauDeBord: true,
    employer: false,
    vaccin: false,
    aliments: false,
    categories: false,
    animaux: false,
    tache: false,
    ventes: false,
    notification: false
  };

  handleClick(item: string) {
    // Réinitialisez tous les états actifs
    for (const key in this.menuItems) {
      if (Object.prototype.hasOwnProperty.call(this.menuItems, key)) {
        this.menuItems[key] = false;
      }
    }
    // Activez l'élément cliqué
    this.menuItems[item] = true;
  }
}
