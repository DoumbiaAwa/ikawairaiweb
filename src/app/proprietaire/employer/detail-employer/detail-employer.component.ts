import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModifierComponent } from '../modifier/modifier.component';
import { EmployerService } from 'src/app/service/employer.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Employer } from 'src/app/model/employer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.scss']
})
export class DetailEmployerComponent implements OnInit {
  employer: Employer = {} as Employer;

  constructor(
    private dialogRef: MatDialogRef<DetailEmployerComponent>,
    private dialog: MatDialog,
    private employerService: EmployerService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) private data: { employerId: string }
  ) {}

  ngOnInit(): void {
    if (this.data?.employerId) {
      this.employerService.getEmployerById(this.data.employerId).subscribe((employer) => {
        this.employer = employer || ({} as Employer);
      });
    }
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(ModifierComponent, {
      width: '550px',
      height: '560px',
    });
  }
  deleteEmployer(): void {
    console.log('Delete button clicked');
  
    if (this.employer && this.employer.id) {
      console.log('Deleting employer with ID:', this.employer.id);
  
      this.employerService.deleteEmployer(this.employer.id).then(() => {
        console.log('Employer deleted successfully');
        this.dialogRef.close(); // Close the dialog after deletion
      }).catch(error => {
        console.error('Error deleting employer:', error);
      });
    }
  }
  
}
