import { Injectable } from '@angular/core';

import { Patient } from '../../models/patient';
import { MOCK_PATIENTS } from '../data/mock-patient.data';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private storageKey = 'patients';

  getPatients(): Patient[] {
    const storedPatients = sessionStorage.getItem(this.storageKey);
    if (storedPatients) {
      return JSON.parse(storedPatients);
    }
    return MOCK_PATIENTS;
  }

  // Save patients to storage
  savePatients(patients: Patient[]): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(patients));
  }

  // Add a new patient and persist it to storage
  addPatient(newPatient: Patient): void {
    const patients = this.getPatients();
    const updatedPatients = [newPatient, ...patients];
    this.savePatients(updatedPatients);
  }
}