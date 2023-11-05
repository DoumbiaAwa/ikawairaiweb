import { Component } from '@angular/core';

@Component({
  selector: 'app-barre',
  templateUrl: './barre.component.html',
  styleUrls: ['./barre.component.scss']
})
export class BarreComponent {
  isActive = true;

  menuItems: { [key: string]: boolean } = {
    liste: true,
    categorie: false,
   
  };

  handleClick(item: string) {
    // Activez l'élément cliqué
    this.menuItems[item] = true;
  
    // Réinitialisez tous les états actifs, sauf celui qui vient d'être cliqué
    for (const key in this.menuItems) {
      if (Object.prototype.hasOwnProperty.call(this.menuItems, key) && key !== item) {
        this.menuItems[key] = false;
      }
    }
    
    // Mettez à jour la propriété isActive en fonction de l'élément actif
    this.isActive = this.menuItems['tableauDeBord'];
  }
}
