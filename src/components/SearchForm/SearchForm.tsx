import css from "./SearchForm.module.css";

interface SearchFormProps {
  callback: (query: string) => void;
}

export default function SearchForm({ callback }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    callback(query);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input
        type="text"
        name="query"
        placeholder="Search by artist name..."
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
