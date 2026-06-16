import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookDraft {
  title: string;
  author: string;
  desc: string;
}

interface BooksStore {
  draft: BookDraft;

  setTitle: (newTitle: string) => void;
  setAuthor: (newAuthor: string) => void;
  setDesc: (newDesc: string) => void;

  clearBookDraft: () => void;
}

const initialBookDraft = {
  title: "",
  author: "",
  desc: "",
};

export const useBooksStore = create<BooksStore>()(
  persist(
    (setStore) => {
      return {
        draft: initialBookDraft,

        setTitle: (newTitle) => {
          setStore((store) => {
            const copyDraft = { ...store.draft, title: newTitle };
            return { draft: copyDraft };
          });
        },

        setAuthor: (newAuthor) => {
          setStore((store) => {
            const copyDraft = { ...store.draft, author: newAuthor };
            return { draft: copyDraft };
          });
        },

        setDesc: (newDesc: string) => {
          setStore((store) => {
            const copyDraft = { ...store.draft, desc: newDesc };
            return { draft: copyDraft };
          });
        },

        clearBookDraft: () => {
          setStore(() => {
            return {
              draft: { ...initialBookDraft },
            };
          });
        },
      };
    },
    {
      name: "book-draft",
    }
  )
);
