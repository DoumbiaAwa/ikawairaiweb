import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutVenteComponent } from '../ajout-vente/ajout-vente.component';
import { DetailVenteComponent } from '../detail-vente/detail-vente.component';
import { VenteService } from 'src/app/service/vente.service';
@Component({
  selector: 'app-page-vente',
  templateUrl: './page-vente.component.html',
  styleUrls: ['./page-vente.component.scss']
})
export class PageVenteComponent {

  ventes: any[] = [];
  selectedCategory: string = ''; // Add a variable to store the selected category
  selectedRace: string = ''; // Add a variable to store the selected race

  constructor(private dialog: MatDialog,
     private venteService:VenteService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutVenteComponent, {
      width: '490px',
      height: '530px',
    });
  }
  detailVente() {
    const dialogRef = this.dialog.open(DetailVenteComponent, {
      width: '500px',
      height: '283px',
    });
  }



    ngOnInit(): void {

      this.getVente();
    }

    getVente(): void {
  this.venteService.getVente().subscribe(response => {
        this.ventes = response.ventes;
       
      });
    }



}













// import { Component,OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { AjoutAnimalComponent } from '../ajout-animal/ajout-animal.component';
// import { DetailAnimalComponent } from '../modifier-animal/detail-animal.component';
// import { AnimalService } from 'src/app/service/animal.service';
// @Component({
//   selector: 'app-page-animaux',
//   templateUrl: './page-animaux.component.html',
//   styleUrls: ['./page-animaux.component.scss']
// })
// export class PageAnimauxComponent implements OnInit{


    
//   openDialog(): void {
//     const dialogRef = this.dialog.open(AjoutAnimalComponent, {
//       width: '495px',
//       height: '590px',
//       disableClose: true,
//     });
   
//   }
//   openModifier(): void {
//     const dialogRef = this.dialog.open(DetailAnimalComponent, {
//       width: '495px',
//       height: '590px',
//       disableClose: true,
//     });
//   }


  
// }


