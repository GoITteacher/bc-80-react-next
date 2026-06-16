import { create } from "axios";

import { Book, GetBooksParams, GetBooksResponse, NewBook } from "@/types/books";

const booksApi = create({
  baseURL: "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com",
});

export const getBooks = async (params?: GetBooksParams) => {
  const res = await booksApi.get<GetBooksResponse>("/public/books", { params });
  return res.data;
};

export const createBook = async (book: NewBook) => {
  const res = await booksApi.post<Book>("/public/books", book);
  return res.data;
};
