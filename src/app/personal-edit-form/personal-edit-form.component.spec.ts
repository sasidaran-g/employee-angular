import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEditFormComponent } from './personal-edit-form.component';

describe('PersonalEditFormComponent', () => {
  let component: PersonalEditFormComponent;
  let fixture: ComponentFixture<PersonalEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
