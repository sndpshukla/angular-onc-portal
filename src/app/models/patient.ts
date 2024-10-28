export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  contact: string;
  address: string;
  medicalHistory: string[];
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}
