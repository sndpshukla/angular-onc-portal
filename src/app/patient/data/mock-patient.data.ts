import { Patient } from '../../models/patient';

export const MOCK_PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 65,
    gender: 'Male',
    diagnosis: 'Lung Cancer',
    contact: '123-456-7890',
    address: '123 Elm St, NY',
    medicalHistory: ['Hypertension', 'Type 2 Diabetes'],
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '123-789-4560',
    },
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 58,
    gender: 'Female',
    diagnosis: 'Breast Cancer',
    contact: '987-654-3210',
    address: '456 Oak St, NY',
    medicalHistory: ['Asthma'],
    emergencyContact: {
      name: 'John Smith',
      relationship: 'Son',
      phone: '987-654-7890',
    },
  },
  {
    id: '3',
    name: 'Alice Johnson',
    age: 72,
    gender: 'Female',
    diagnosis: 'Colon Cancer',
    contact: '456-789-0123',
    address: '789 Pine St, NY',
    medicalHistory: ['Hypertension', 'Type 2 Diabetes'],
    emergencyContact: {
      name: 'Max Anderson',
      relationship: 'Spouse',
      phone: '123-789-4560',
    },
  },
];
