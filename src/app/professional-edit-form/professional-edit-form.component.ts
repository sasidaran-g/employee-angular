import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-professional-edit-form',
  templateUrl: './professional-edit-form.component.html',
  styleUrls: ['./professional-edit-form.component.scss'],
})
export class ProfessionalEditFormComponent implements OnInit {
  professionalForm!: FormGroup;
  empId: any;
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
    private route: ActivatedRoute,
    private service: ApiService,
    private formbuild: FormBuilder,
    private datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.empId = params['id'];
      console.log(this.empId);
      if (this.empId) {
        this.getSingleProf(this.empId);
      }
    });
    this.professionalForm = this.formbuild.group({
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

  getSingleProf(id: any) {
    console.log(id);
    this.service.singleProf(id).subscribe(
      (response: any) => {
        console.log('response for single professional-->', response);
        const form = this.professionalForm;
        const resVal = response.data[0];
        let languageArray = resVal['languages'].split(', ');
        console.log(languageArray);
        let skillArray = resVal['skills'].split(', ');
        console.log(skillArray); 
        form.controls['empid'].setValue(resVal['empid']);
        form.controls['education'].setValue(resVal['education']);
        form.controls['domain'].setValue(resVal['domain']);
        form.controls['joindate'].setValue(resVal['joindate']);
        form.controls['basicsalary'].setValue(resVal['basicsalary']);
        form.controls['hra'].setValue(resVal['hra']);
        form.controls['da'].setValue(resVal['da']);
        form.controls['insurance'].setValue(resVal['insurance']);
        form.controls['pf'].setValue(resVal['pf']);
        // Set the hobbies checkboxes to true
        languageArray.forEach((mylanguage: any) => {
          if (this.languages.includes(mylanguage)) {
            form.controls[mylanguage].setValue(true);
          }
        });
        skillArray.forEach((myskill: any) => {
          if (this.skills.includes(myskill)) {
            form.controls[myskill].setValue(true);
          }
        });
      },
      (error) => {
        console.log('error in professional single', error);
      }
    );
  }

  onUpdate(): void {
    if (this.professionalForm.valid) {
      const formVal = { ...this.professionalForm.value };
      formVal.languages = this.languages.filter(
        (language) => this.professionalForm.value[language]
      );
      // Remove the individual language fields from formData
      this.languages.forEach((language) => delete formVal[language]);
      formVal.skills = this.skills.filter(
        (skill) => this.professionalForm.value[skill]
      );
      // Remove the individual skill fields from formData
      this.skills.forEach((skill) => delete formVal[skill]);
      const fommDOB = this.datepipe.transform(formVal.dob, 'yyyy/MM/dd');
      const formData = { ...formVal, dob: fommDOB };
      formData.netsalary = parseInt(formData.basicsalary) + parseInt(formData.hra) + parseInt(formData.da);
      formData.allowence = parseInt(formData.insurance) + parseInt(formData.pf);
      formData.takehomesalary = parseInt(formData.netsalary) - parseInt(formData.allowence);
      console.log('Form Submitted', formData);
      this.service.updateProf(formData, this.empId).subscribe(
        (response) => {
          console.log('response in update-->', response);
          this.professionalForm.reset();
        },
        (error) => {
          console.log('error in update-->', error);
        }
      );
    }
  }
}
