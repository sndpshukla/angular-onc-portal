import { Routes } from '@angular/router';

import { oncologyRouteGuard } from './guards/oncology-route.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  {
    path: 'patients',
    loadChildren: () => import('./patient/patient.module').then((m) => m.PatientModule),
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointment/appointment.module').then((m) => m.AppointmentModule),
  },
  {
    path: 'treatments',
    loadChildren: () => import('./treatment/treatment.module').then((m) => m.TreatmentModule),
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then((m) => m.ReportsModule),
    canActivate: [oncologyRouteGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];
