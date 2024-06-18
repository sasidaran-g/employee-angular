import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-professional-table',
  templateUrl: './professional-table.component.html',
  styleUrls: ['./professional-table.component.scss'],
})
export class ProfessionalTableComponent implements OnInit {
  readData: any[] = [];
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getProfessionalTable();
  }

  onDelete(id: any): void {
    console.log(id);
    this.service.deleteProf(id).subscribe(
      (response) => {
        console.log('response for delete', response);
        this.getProfessionalTable();
      },
      (error) => {
        console.log('error in delete', error);
      }
    );
  }

  public getProfessionalTable(): void {
    this.service.getProftable().subscribe(
      (response: any) => {
        console.log('repsonse from server', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
