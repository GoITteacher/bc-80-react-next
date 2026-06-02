import axios from "axios";
import { Cocktail } from "../types/cocktails";

export const fetchCocktails = async (name: string) => {
  const baseUrl = "https://drinkify.b.goit.study";
  const endPoint = "/api/v1/cocktails/search/";
  const url = baseUrl + endPoint;

  const params = {
    s: name,
  };

  const res = await axios.get<Cocktail[]>(url, { params });
  return res.data;
};
