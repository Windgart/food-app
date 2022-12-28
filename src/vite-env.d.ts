/// <reference types="vite/client" />

interface MealModel {
  id: string;
  title: string;
  image: string;
  categories: string[];
  rating: number;
  isFavorite: boolean;
}

type AddItemSignature = (item: MealModel) => void;
type ActionWithIdSignature = (item: string) => void;
