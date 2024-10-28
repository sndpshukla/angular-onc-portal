import { Report } from '../../models/report';

export const MOCK_REPORTS: Report[] = [
  {
    id: '1',
    patientName: 'John Doe',
    reportType: 'CT Scan',
    generatedOn: '2024-10-25',
    status: 'Completed',
    findings: 'Lung mass detected, needs further analysis',
    doctor: 'Dr. House',
    labTechnician: 'James Brown',
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    reportType: 'MRI',
    generatedOn: '2024-10-26',
    status: 'Pending',
    findings: 'Significant Reduction in mass of the tumor, positive prognosis',
    doctor: 'Dr. Watson',
    labTechnician: 'James Brown',
  },
  {
    id: '3',
    patientName: 'Alice Johnson',
    reportType: 'Blood Test',
    generatedOn: '2024-10-27',
    status: 'In Progress',
    findings: 'New treatment shows significant reduction in cancer markers.',
    doctor: 'Dr. Wilson',
    labTechnician: 'James Brown',
  },
];
