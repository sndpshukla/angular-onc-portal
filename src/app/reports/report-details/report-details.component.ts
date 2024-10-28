import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Report } from '../../models/report';
import { MOCK_REPORTS } from '../data/mock-report.data';

@Component({
  selector: 'app-report-details',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './report-details.component.html',
  styleUrl: './report-details.component.scss',
})
export class ReportDetailsComponent implements OnInit {
  report?: Report;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.report = MOCK_REPORTS.find((report) => report.id === id);
  }
}
