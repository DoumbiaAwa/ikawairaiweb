// page-aliment.component.ts
import { Component, OnInit } from '@angular/core';
import { AjoutAlimentComponent } from '../ajout-aliment/ajout-aliment.component';
import { MatDialog } from '@angular/material/dialog';
import { AlimentService } from 'src/app/service/aliment.service';
import { Aliment } from 'src/app/model/aliment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-aliment',
  templateUrl: './page-aliment.component.html',
  styleUrls: ['./page-aliment.component.scss']
})
export class PageAlimentComponent implements OnInit {
  aliments: any[] = [];
  aliment$: Observable<{ aliments: Aliment[] }> = new Observable<{ aliments: Aliment[] }>();

  constructor(private dialog: MatDialog, private alimentService: AlimentService) { }

  ngOnInit(): void {
    console.log('je suis la')
    this.alimentService.getAliments().subscribe(data => {
      this.aliments = data.aliments;
    });
  }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutAlimentComponent, {
      width: '555px',
      height: '650px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: Aliment) => {
      if (result) {
        this.aliments.push(result);
      }
    });
  }
}
