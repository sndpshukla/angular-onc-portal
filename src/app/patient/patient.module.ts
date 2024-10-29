import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';

// dynamic routes for patients post lazy loaded module is added
const routes: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'add', component: AddPatientComponent },
  { path: ':id', component: PatientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientModule {}
