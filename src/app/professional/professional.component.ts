import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
})
export class ProfessionalComponent implements OnInit {
  professionalForm!: FormGroup;
  domains: string[] = [
    'Software Engineer',
    'Web Developer',
    'Cybaer Security',
    'Blockchain',
    'IOT',
    'VR & AR',
  ];
  languages: string[] = ['PYTHON', 'JAVA', 'C#', 'PHP', 'MYSQL'];
  skills: string[] = ['ANGULAR', 'REACT', 'VEU', 'ANGULAR.JS', 'REACT.JS'];

  constructor(
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.professionalForm = this.fb.group({
      empid: ['', Validators.required],
      education: ['', Validators.required],
      joindate: ['', Validators.required],
      domain: ['', Validators.required],
      PYTHON: false,
      'C#': [false],
      JAVA: [false], 
      PHP: [false],
      MYSQL: [false],
      ANGULAR: [false],
      REACT: [false],
      'ANGULAR.JS': [false],
      'REACT.JS': [false],
      VEU: [false],
      basicsalary: ['', Validators.required],
      hra: ['', Validators.required],
      da: ['', Validators.required],
      insurance: ['', Validators.required],
      pf: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.professionalForm.valid) {
      console.log(this.professionalForm.value);
      const formData = { ...this.professionalForm.value };
      formData.languages = this.languages.filter(
        (language) => this.professionalForm.value[language]
      );
      // Remove the individual language fields from formData
      this.languages.forEach((language) => delete formData[language]);
      formData.skills = this.skills.filter(
        (skill) => this.professionalForm.value[skill]
      );
      const fommDOB = this.datepipe.transform(formData.joindate, 'yyyy/MM/dd');
      const professionalForm = { ...formData, joindate: fommDOB };
      professionalForm.netsalary = parseInt(professionalForm.basicsalary) + parseInt(professionalForm.hra) + parseInt(professionalForm.da);
      professionalForm.allowence = parseInt(professionalForm.insurance) + parseInt(professionalForm.pf);
      professionalForm.takehomesalary = parseInt(professionalForm.netsalary) - parseInt(professionalForm.allowence);
      console.log('Form Submitted', professionalForm);
      this.service.insertProf(professionalForm).subscribe((response)=>{
        console.log("response from server!",response);
        this.professionalForm.reset();
      },(error)=>{
        console.log("error",error);
      })
    } else {
      console.log('form is invalid!');
    }
  }
}
