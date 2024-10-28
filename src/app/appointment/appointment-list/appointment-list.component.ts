import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Appointment } from '../../models/appointment';
import { MOCK_APPOINTMENTS } from '../data/mock-appointment.data';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.appointments = MOCK_APPOINTMENTS;
  }
}
