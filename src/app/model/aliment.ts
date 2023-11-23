export interface Aliment {
    id?: string;
    nom: string;
    quantite: number;
    uniter?: string; // Rendre la propriété 'unite' facultative
    frequence: string;
    prix: number;
  }
  