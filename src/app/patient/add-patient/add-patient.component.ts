import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss',
})
export class AddPatientComponent {
  patientForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    age: new FormControl('', { validators: [Validators.required] }),
    gender: new FormControl('', { validators: [Validators.required] }),
  });

  onSubmit() {
    console.log('Form Values', this.patientForm.value);
  }
}
