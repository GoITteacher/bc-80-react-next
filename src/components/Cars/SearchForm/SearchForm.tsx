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
    <form className={css.form} action={handleSubmit}>
      <input className={css.input} type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}

//!=========================================
