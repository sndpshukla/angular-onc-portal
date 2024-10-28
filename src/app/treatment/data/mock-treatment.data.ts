import { Treatment } from '../../models/treatment';

export const MOCK_TREATMENTS: Treatment[] = [
  {
    id: '1',
    patientName: 'John Doe',
    treatmentType: 'Chemotherapy',
    startDate: '2024-10-10',
    endDate: '2024-10-24',
    doctor: 'Dr. House',
    progress: 'Ongoing',
    medication: ['Carboplatin', 'Paclitaxel'],
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    treatmentType: 'Radiation',
    startDate: '2024-10-15',
    endDate: '2024-10-30',
    doctor: 'Dr. Wilson',
    progress: 'Ongoing',
    medication: ['Carboplatin', 'Paclitaxel'],
  },
  {
    id: '3',
    patientName: 'Alice Johnson',
    treatmentType: 'Immunotherapy',
    startDate: '2024-10-20',
    endDate: '2024-11-10',
    doctor: 'Dr. Cameron',
    progress: 'Ongoing',
    medication: ['Carboplatin', 'Paclitaxel'],
  },
];
