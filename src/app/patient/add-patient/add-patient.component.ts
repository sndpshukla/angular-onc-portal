import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Patient } from '../../models/patient';
import { CommunicationService } from '../../shared/service/communication.service';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss',
})
export class AddPatientComponent implements OnInit {
  patientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private communicationService: CommunicationService,
  ) {}

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      diagnosis: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      medicalHistory: this.formBuilder.array([]),
      emergencyContact: this.formBuilder.group({
        name: ['', Validators.required],
        relationship: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      }),
    });
  }

  get medicalHistory(): FormArray {
    return this.patientForm.get('medicalHistory') as FormArray;
  }

  addMedicalHistory() {
    this.medicalHistory.push(new FormControl('', Validators.required));
  }

  removeMedicalHistory(index: number) {
    this.medicalHistory.removeAt(index);
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      const newPatient: Patient = this.patientForm.value;
      this.patientService.addPatient(newPatient);
      this.patientForm.reset();
      this.communicationService.sendNotification({ type: 'success', message: 'Patient Added' });
    } else {
      this.communicationService.sendNotification({ type: 'warning', message: 'Please correct the form' });
    }
  }
}
