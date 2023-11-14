import { Component, OnInit } from '@angular/core';
import { AjoutProprietaireComponent } from '../ajout-proprietaire/ajout-proprietaire.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Proprio } from '../model/proprio';
import { ProprioService } from '../service/proprio.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-accueil-awa',
  templateUrl: './accueil-awa.component.html',
  styleUrls: ['./accueil-awa.component.scss']
})
export class AccueilAwaComponent implements OnInit {
  proprietaires$: Observable<any[]> = new Observable<any[]>();
  constructor(private dialog: MatDialog, private proprioService: ProprioService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutProprietaireComponent, {
      width: '528px',
      height: '570px', 
      disableClose: true,// Définissez la largeur de la boîte de dialogue
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Résultat de la boîte de dialogue : ${result}`);
    });
  }

  ngOnInit(): void {
    // Fetch the data from the service
    this.proprietaires$ = this.proprioService.getProprios();
  }

}
