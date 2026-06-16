"use client";

import { useBooksStore } from "@/stores/booksStore";
import css from "./CreateBookForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewBook } from "@/types/books";
import { createBook } from "@/services/booksService";

const CreateBookForm = () => {
  const queryClient = useQueryClient();
  const draft = useBooksStore((s) => s.draft);

  const setTitle = useBooksStore((s) => s.setTitle);
  const setAuthor = useBooksStore((s) => s.setAuthor);
  const setDesc = useBooksStore((s) => s.setDesc);
  const clearBookDraft = useBooksStore((s) => s.clearBookDraft);

  const booksMutation = useMutation({
    mutationFn: (book: NewBook) => createBook(book),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
  });

  const handleSubmit = () => {
    booksMutation.mutate(draft);
    clearBookDraft();
  };

  return (
    <form action={handleSubmit} className={css["createBookForm"]}>
      <input
        type="title"
        placeholder="title"
        value={draft.title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="author"
        placeholder="author"
        value={draft.author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="desc"
        placeholder="desc"
        value={draft.desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button type="submit">Create Book</button>
    </form>
  );
};

export default CreateBookForm;
