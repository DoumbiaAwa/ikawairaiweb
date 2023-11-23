import firebase from "firebase/compat";
export interface Category {
  id: string | undefined;
  nom: string;
  vaccins: firebase.firestore.FieldValue | string[];
  races: { id: string; race: string }[];
}

