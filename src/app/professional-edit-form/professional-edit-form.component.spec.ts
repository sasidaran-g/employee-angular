import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalEditFormComponent } from './professional-edit-form.component';

describe('ProfessionalEditFormComponent', () => {
  let component: ProfessionalEditFormComponent;
  let fixture: ComponentFixture<ProfessionalEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
