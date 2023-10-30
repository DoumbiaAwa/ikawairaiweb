import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-eleveur',
  templateUrl: './profil-eleveur.component.html',
  styleUrls: ['./profil-eleveur.component.scss']
})
export class ProfilEleveurComponent {
  isActive = true;
  handleClick() {
    this.isActive = !this.isActive;
  }

}
