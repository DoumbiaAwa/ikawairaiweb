
import { Category } from "./category";

export interface Vaccin {
  id: string; 
  nom: string;
  date: string;
  prix: number;
  // categories: Category[];
  categories: { id: string | undefined; nom: string }[];
}