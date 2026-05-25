import css from "./SearchForm.module.css";
interface SearhcFormProps {
  onSubmit: (query: string, page: number) => void;
}
const SearchForm = ({ onSubmit }: SearhcFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    const page = Number(formData.get("page"));
    onSubmit(query, page);
  };

  return (
    <form className={css["searchForm"]} action={handleSubmit}>
      <input type="text" name="query" />
      <input type="text" name="page" defaultValue={1} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
