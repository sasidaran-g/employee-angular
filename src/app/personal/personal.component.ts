import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private service: ApiService
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      empname: ['', Validators.required],
      empage: ['', Validators.required],
      empemail: ['', [Validators.required, Validators.email]],
      empmobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      const formVal = this.employeeForm.value;
      const fommDOB = this.datepipe.transform(formVal.dob, 'yyyy/MM/dd');
      const formData = { ...formVal, dob: fommDOB };
      console.log(formData);
      this.service.insertEmp(formData).subscribe(
        (response) => {
          console.log('response from server==>', response);
          this.employeeForm.reset();
        },
        (error) => {
          console.log('error===>', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
