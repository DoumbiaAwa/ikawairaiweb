import { Race } from "./race";
export interface Category {
  id: string | undefined;
  nom: string;
  // photocat: string; // Ajoutez les propriétés manquantes
  // photorace: string;
  race: Race[];
}
