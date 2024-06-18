import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-edit-form',
  templateUrl: './personal-edit-form.component.html',
  styleUrls: ['./personal-edit-form.component.scss'], 
})
export class PersonalEditFormComponent implements OnInit {
  editForm!: FormGroup;
  empId: any;

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
        this.getSingleEmployee(this.empId);
      }
    });
    this.editForm = this.formbuild.group({
      editname: ['', Validators.required],
      editage: ['', Validators.required],
      editemail: ['', [Validators.required, Validators.email]],
      editmobile: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  getSingleEmployee(id: any) {
    this.service.getSingleData(id).subscribe((response: any) => {
      console.log('response from server--', response.data[0]);
      const form = this.editForm;
      const resVal = response.data[0];
      form.controls['editname'].setValue(resVal['name']);
      form.controls['editage'].setValue(resVal['age']);
      form.controls['editemail'].setValue(resVal['email']);
      form.controls['editmobile'].setValue(resVal['mobile']);
      form.controls['dob'].setValue(resVal['dob']);
      form.controls['gender'].setValue(resVal['gender']);
    });
  }

  onUpdate(): void {
    if (this.editForm.valid) {
      console.log(this.editForm.value);
      const formVal = this.editForm.value;
      const fommDOB = this.datepipe.transform(formVal.dob, 'yyyy/MM/dd');
      const formData = { ...formVal, dob: fommDOB };
      console.log(formData);
      this.service.updateEmpData(formData, this.empId).subscribe(
        (response: any) => {
          console.log('response==>', response);
          this.editForm.reset();
        },
        (error) => {
          console.log('error==>', error);
        }
      );
    } else {
      console.log('form is invalid!');
    }
  }
}
