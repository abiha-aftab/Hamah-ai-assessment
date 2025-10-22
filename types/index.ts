export interface Persona {
  id?: string;
  name: string;
  category: string;
  demographic: string;
  lifestyles: string;
  behavioral: string;
  psychographic: string;
  personaPrompt: string;
  profileImage?: string;
  quote: string;
  age: string;
  gender: string;
  location: string;
  relationshipStatus: string;
  title: string;
  education: string;
  description: string;
  goals: string[];
  motivations: string[];
  documents: File[];
}

export interface PersonaDialogProps {
  isOpen: boolean;
  onClose: () => void;
  persona: Persona | null;
  onSave: (persona: Persona) => void;
}
