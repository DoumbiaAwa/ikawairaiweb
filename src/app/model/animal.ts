import { Category } from "./category";

export interface Animal{
    id?: string;
    nom: string;
    categorie: string;
    race: string;
    nombre: number;
    etat:string;
    age?:number;
  }
  