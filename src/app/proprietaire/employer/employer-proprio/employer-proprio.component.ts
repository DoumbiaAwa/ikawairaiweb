import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailEmployerComponent } from '../detail-employer/detail-employer.component';
import { AjoutEmployerComponent } from '../ajout-employer/ajout-employer.component';
import { EmployerService } from 'src/app/service/employer.service';
import { Observable } from 'rxjs';
import { Employer } from 'src/app/model/employer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-employer-proprio',
  templateUrl: './employer-proprio.component.html',
  styleUrls: ['./employer-proprio.component.scss']
})
export class EmployerProprioComponent implements OnInit {
  employers: any[] = [];
  employer$: Observable<any[]> = new Observable<any[]>();
  constructor(private dialog: MatDialog, private employerService:EmployerService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AjoutEmployerComponent, {
      width: '550px',
      height: '560px',
      disableClose:true
    });
  }
  afficherDetail(employerId: string): void {
    const dialogRef = this.dialog.open(DetailEmployerComponent, {
      width: '350px', // Adjust the width as needed
      height: '200px', // Adjust the height as needed
      data: { employerId } // Pass the employer ID to the DetailEmployerComponent
    });
  }
  ngOnInit(): void {
    this.employer$ = this.employerService.getEmployers().pipe(map(response => response.employers));

  }

}
