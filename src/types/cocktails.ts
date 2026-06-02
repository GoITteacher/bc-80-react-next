interface Ingredient {
  title: string;
  measure: string;
  ingredientId: string;
}
export interface Cocktail {
  _id: string;
  drink: string;
  drinkAlternate: string;
  tags: string;
  video: string;
  category: string;
  IBA: string;
  alcoholic: string;
  glass: string;
  description: string;
  instructions: string;
  instructionsES: string;
  instructionsDE: string;
  instructionsFR: string;
  instructionsIT: string;
  instructionsRU: string;
  instructionsPL: string;
  instructionsUK: string;
  drinkThumb: string;
  ingredients: Ingredient[];
  shortDescription: string;
}
