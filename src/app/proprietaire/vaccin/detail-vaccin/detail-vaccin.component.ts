// Dans le composant (DetailVaccinComponent)
import { Component, Inject, OnInit } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VaccinService } from 'src/app/service/vaccin.service';
import { Vaccin } from 'src/app/model/vaccin';
import { ActivatedRoute } from '@angular/router'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-vaccin',
  templateUrl: './detail-vaccin.component.html',
  styleUrls: ['./detail-vaccin.component.scss']
})
export class DetailVaccinComponent implements OnInit {
  vaccin: Vaccin = {} as Vaccin;

  constructor(
    private dialogRef: MatDialogRef<DetailVaccinComponent>,
    private vaccinService: VaccinService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private data: { vaccinId: string }
  ) {
  }


  ngOnInit(): void {
    if (this.data?.vaccinId) {
      console.log('Received Vaccin ID in DetailVaccinComponent:', this.data.vaccinId);
      this.vaccinService.getVaccinById(this.data.vaccinId).subscribe((vaccin) => {
        console.log('Received Vaccin:', vaccin);
        this.vaccin = vaccin|| ({} as Vaccin);
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}











