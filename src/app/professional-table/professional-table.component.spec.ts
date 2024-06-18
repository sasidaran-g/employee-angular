import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTableComponent } from './professional-table.component';

describe('ProfessionalTableComponent', () => {
  let component: ProfessionalTableComponent;
  let fixture: ComponentFixture<ProfessionalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
