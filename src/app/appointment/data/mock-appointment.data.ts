import { Appointment } from '../../models/appointment';

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    patientName: 'John Doe',
    date: '2024-10-30',
    time: '10:00 AM',
    doctor: 'Dr. House',
    status: 'Scheduled',
    notes: 'Patient advised to arrive 15 minutes early',
    reason: 'Routine check-up',
    location: 'Oncology Clinic, Room 3A',
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    date: '2024-10-31',
    time: '2:00 PM',
    doctor: 'Dr. Wilson',
    status: 'Completed',
    location: 'Oncology Clinic, Room 4B',
    notes: 'Patient advised to come with previous reports',
    reason: 'Problems with Medicines',
  },
  {
    id: '3',
    patientName: 'Alice Johnson',
    date: '2024-11-01',
    time: '11:30 AM',
    doctor: 'Dr. Cameron',
    status: 'Pending',
    location: 'Oncology Clinic, Room 3A',
    notes: 'PPatient advised to come with family',
    reason: 'Post treatment would need someone to drive home',
  },
];
