import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentPlanComponent } from './add-treatment-plan.component';

describe('AddTreatmentPlanComponent', () => {
  let component: AddTreatmentPlanComponent;
  let fixture: ComponentFixture<AddTreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTreatmentPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
