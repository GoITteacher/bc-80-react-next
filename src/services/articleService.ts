import axios from "axios";
import { Article } from "../types/articles";

interface GetArticlesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getArticles = async (query: string, page: number) => {
  const url = "https://newsapi.org/v2/everything";

  const params = {
    q: query,
    page: page,
    apiKey: "c8747511a2c34730a83caaff4f3693e7",
  };

  const res = await axios.get<GetArticlesResponse>(url, { params });
  return res.data;
};
