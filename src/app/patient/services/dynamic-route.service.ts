import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { AddPatientComponent } from '../add-patient/add-patient.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicRouteService {
  constructor(private router: Router) {}

  registerAdditionalRoutes() {
    const dynamicRoute: Route = {
      path: 'patients/special',
      component: AddPatientComponent,
    };
    this.router.config.unshift(dynamicRoute);

    console.log(this.router);
  }
}
