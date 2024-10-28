import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTreatmentPlanComponent } from './add-treatment-plan/add-treatment-plan.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { TreatmentListComponent } from './treatment-list/treatment-list.component';

const routes: Routes = [
  { path: '', component: TreatmentListComponent },
  { path: ':id', component: TreatmentDetailsComponent },
  { path: 'book', component: AddTreatmentPlanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentModule {}
