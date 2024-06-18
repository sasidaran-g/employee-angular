import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-personal-table',
  templateUrl: './personal-table.component.html',
  styleUrls: ['./personal-table.component.scss'],
})
export class PersonalTableComponent implements OnInit {
  readData: any[] = [];
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getpersonalTable();
  }

  onDelete(id: any): void {
    console.log(id);
    this.service.DeleteEmp(id).subscribe(
      (response) => {
        console.log('response==>', response);
        this.getpersonalTable();
      },
      (error) => {
        console.log('error-->', error);
      }
    );
  }

  public getpersonalTable(): void {
    this.service.getPersonal().subscribe(
      (response: any) => {
        console.log('response from server', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
