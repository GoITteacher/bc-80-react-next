import axios from "axios";
import { Article } from "../types/articles";
import { NEWS_API_KEY } from "../helpers/constants";

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
    apiKey: NEWS_API_KEY,
  };

  const res = await axios.get<GetArticlesResponse>(url, { params });
  return res.data;
};
