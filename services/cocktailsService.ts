import { Cocktail } from "@/types/cocktails";
import axios from "axios";

export const getRandomCocktails = async () => {
  const url = "https://drinkify.b.goit.study/api/v1/cocktails/?r=10";
  const res = await axios.get<Cocktail[]>(url);
  return res.data;
};
