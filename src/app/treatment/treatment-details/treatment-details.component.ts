import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Treatment } from '../../models/treatment';
import { MOCK_TREATMENTS } from '../data/mock-treatment.data';

@Component({
  selector: 'app-treatment-details',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './treatment-details.component.html',
  styleUrl: './treatment-details.component.scss',
})
export class TreatmentDetailsComponent implements OnInit {
  treatment?: Treatment;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.treatment = MOCK_TREATMENTS.find((treatment) => treatment.id === id);
  }
}
