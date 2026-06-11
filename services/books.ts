import { Book, Category } from "@/types/books";
import axios from "axios";

export const getCategoryList = async () => {
  const baseUrl = "https://books-backend.p.goit.global";
  const endPoint = "/books/category-list";
  const url = baseUrl + endPoint;

  const res = await axios.get<Category[]>(url);
  return res.data;
};

export const getBooksByCategory = async (category: string) => {
  const baseUrl = "https://books-backend.p.goit.global";
  const endPoint = "/books/category";
  const url = baseUrl + endPoint;

  const params = {
    category: category,
  };

  const res = await axios.get<Book[]>(url, { params });
  return res.data;
};
