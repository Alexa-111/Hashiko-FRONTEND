export interface Animal {
  id: string;
  name: string;
  species: 'perro' | 'gato' | 'otro';
  breed: string;
  age: string;
  kennel: string;
  status: 'Listo p/ adopción' | 'En tratamiento' | 'En observación' | 'Adoptado' | 'En acogida';
  statusColor?: string;
  healthNotes: string;
  vetAttending: string;
  vaccinated: boolean;
  quarantineCompleted: boolean;
  photoUrl: string;
  dateAdmitted: string;
  weight?: string;
  intakeStory?: string;
  microchip?: string;
  gender?: 'Macho' | 'Hembra';
}

export interface AdoptionInquiry {
  id: string;
  petId: string;
  petName: string;
  petInfo: string;
  petPhotoUrl: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  matchScore: number;
  submittedTime: string;
  housingType: string;
  experience: string;
  interviewScheduled?: string;
  status: 'Pendiente' | 'Pre-aprobada' | 'Entrevista agendada' | 'Aprobada' | 'Rechazada';
  notes: string;
}

export interface LostPetAlert {
  id: string;
  petName: string;
  species: 'perro' | 'gato';
  breed: string;
  lastSeenLocation: string;
  dateReported: string;
  status: 'Extraviado' | 'Visto recientemente' | 'Reencontrado';
  photoUrl: string;
  contactName: string;
  contactPhone: string;
  reward?: string;
  description: string;
}

export interface ShelterStats {
  capacity: number;
  maxCapacity: number;
  freeKennels: number;
  dogsCount: number;
  catsCount: number;
  activeInCustody: number;
  adoptionRequests: number;
  urgentAdoptions: number;
  interviewsToday: number;
  reunionsThisWeek: number;
}
