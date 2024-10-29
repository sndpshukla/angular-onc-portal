import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
  { path: '', component: ReportListComponent },
  { path: ':id', component: ReportDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsModule {}
