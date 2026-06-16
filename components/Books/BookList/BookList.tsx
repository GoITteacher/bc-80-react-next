"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./BookList.module.css";
import { getBooks } from "@/services/booksService";

const BookList = () => {
  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  const books = data?.items || [];

  return (
    <ul className={css["bookList"]}>
      {books.map((book) => {
        return <li>{book._id}</li>;
      })}
    </ul>
  );
};

export default BookList;
