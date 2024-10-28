import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Report } from '../../models/report';
import { MOCK_REPORTS } from '../data/mock-report.data';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.scss',
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];

  ngOnInit(): void {
    this.reports = MOCK_REPORTS;
  }
}
