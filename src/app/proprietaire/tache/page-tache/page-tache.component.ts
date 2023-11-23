import { Component, OnInit } from '@angular/core';
import { AjoutTacheComponent } from '../ajout-tache/ajout-tache.component';
import { MatDialog } from '@angular/material/dialog';
import { TacheService } from 'src/app/service/tache.service';
import { Tache } from 'src/app/model/tache';
@Component({
  selector: 'app-page-tache',
  templateUrl: './page-tache.component.html',
  styleUrls: ['./page-tache.component.scss']
})
export class PageTacheComponent implements OnInit {
  taches: any[] = [];
  constructor(private dialog: MatDialog,
    private tacheService: TacheService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutTacheComponent, {
      width: '500px',
      height: '440px',
      disableClose: true,
    });
  }
  ngOnInit(): void {
  this.getTaches()
  }


  getTaches(): void {
    this.tacheService.getTache().subscribe(response => {
          this.taches = response.taches;
         
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
//   animals: any[] = [];
//   selectedCategory: string = ''; // Add a variable to store the selected category
//   selectedRace: string = ''; // Add a variable to store the selected race
//   nouvelleCarte: any;

//   constructor(private dialog: MatDialog,
//     private animalService: AnimalService) { }


//     ngOnInit(): void {

//       this.getAnimals();
//     }

  //   getAnimals(): void {
  // this.animalService.getAnimal().subscribe(response => {
  //       this.animals = response.animals;
       
  //     });
  //   }


    
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



