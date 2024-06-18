import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ProfessionalComponent } from './professional/professional.component';
import { TableComponent } from './table/table.component';
import { PersonalTableComponent } from './personal-table/personal-table.component';
import { ProfessionalTableComponent } from './professional-table/professional-table.component';
import { PersonalEditFormComponent } from './personal-edit-form/personal-edit-form.component';
import { ProfessionalEditFormComponent } from './professional-edit-form/professional-edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    EmployeeComponent,
    PersonalComponent,
    ProfessionalComponent,
    TableComponent,
    PersonalTableComponent,
    ProfessionalTableComponent,
    PersonalEditFormComponent,
    ProfessionalEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: 'personal', component: PersonalComponent }]),
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
