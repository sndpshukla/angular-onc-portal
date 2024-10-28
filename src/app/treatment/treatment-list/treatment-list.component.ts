import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Treatment } from '../../models/treatment';
import { MOCK_TREATMENTS } from '../data/mock-treatment.data';

@Component({
  selector: 'app-treatment-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './treatment-list.component.html',
  styleUrl: './treatment-list.component.scss',
})
export class TreatmentListComponent implements OnInit {
  treatments: Treatment[] = [];

  ngOnInit(): void {
    this.treatments = MOCK_TREATMENTS;
  }
}
