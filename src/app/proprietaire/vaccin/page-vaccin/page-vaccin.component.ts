import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AjoutVaccinComponent } from '../ajout-vaccin/ajout-vaccin.component';
import { DetailVaccinComponent } from '../detail-vaccin/detail-vaccin.component';
import { VaccinService } from 'src/app/service/vaccin.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vaccin } from 'src/app/model/vaccin';
@Component({
  selector: 'app-page-vaccin',
  templateUrl: './page-vaccin.component.html',
  styleUrls: ['./page-vaccin.component.scss']
})
export class PageVaccinComponent implements OnInit {
  vaccins: any[] = [];
  vaccin$: Observable<any[]> = new Observable<any[]>();
  dialogRef: MatDialogRef<any, any> | undefined;

  constructor(private dialog: MatDialog,
    private vaccinService:VaccinService) { }
    openDialog(): void {
      
        this.dialogRef = this.dialog.open(AjoutVaccinComponent, {
          width: '570px',
          height: '560px',
          disableClose:true,
        });
      } 
   
    
     
   
   afficherDetail(vaccinId: String): void {
    console.log('Selected Vaccin ID:', vaccinId);
    this.dialogRef = this.dialog.open(DetailVaccinComponent, {
      width: '560px',
      height: '490px',
      data: { vaccinId },
    });
  }
  ngOnInit(): void {
    this.vaccin$ = this.vaccinService.getVaccines().pipe(map(response => response.vaccins));
    this.vaccin$.subscribe(data => console.log('Vaccines:', data));
  }
  
 
}
  
