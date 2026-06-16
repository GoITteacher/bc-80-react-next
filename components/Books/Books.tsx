import BookList from "./BookList/BookList";
import css from "./Books.module.css";
import CreateBookForm from "./CreateBookForm/CreateBookForm";

const Books = () => {
  return (
    <div className={css["books"]}>
      <h1>Books</h1>
      <CreateBookForm />
      <BookList />
    </div>
  );
};

export default Books;
