import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:5000/employee';
  professionalUrl = 'http://localhost:5000/professional';

  constructor(private http: HttpClient) {}

  // /////////////////////////////////////////////////////////PERSONAL//////////////////////////////////

  insertEmp(data: any) {
    const geturl = this.apiUrl + '/insertEmployee';
    return this.http.post<any[]>(geturl, data);
  } 

  getPersonal() {
    const geturl = this.apiUrl + '/getEmployeeData';
    return this.http.get<any[]>(geturl);
  }

  getSingleData(id: any) {
    console.log(id);
    return this.http.get(`${this.apiUrl}/getSingleData/${id}`);
  }

  updateEmpData(data: any, id: any) {
    console.log(data);
    console.log(id);
    return this.http.put(`${this.apiUrl}/updateEmp/${id}`, data);
  }

  DeleteEmp(id: any) {
    console.log(id);
    return this.http.delete(`${this.apiUrl}/deleteEmp/${id}`);
  }

  // /////////////////////////////////////////////// PROFESSIONAL ////////////////////////////////////////////

  insertProf(data: any) {
    const geturl = this.professionalUrl + '/insertProffesional';
    return this.http.post<any[]>(geturl, data);
  }

  getProftable() {
    const geturl = this.professionalUrl + '/getProfessional';
    return this.http.get<any[]>(geturl);
  }

  singleProf(id: any) {
    return this.http.get(`${this.professionalUrl}/singleProfessional/${id}`);
  }

  updateProf(data: any, id: any) {
    return this.http.put(`${this.professionalUrl}/UpdateProf/${id}`, data);
  }

  deleteProf(id: any) {
    console.log(id);
    return this.http.delete(`${this.professionalUrl}/deleteProf/${id}`);
  }
}
