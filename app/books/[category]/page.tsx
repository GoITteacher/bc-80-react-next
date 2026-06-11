import { getBooksByCategory } from "@/services/books";
import css from "./Page.module.css";

interface PageProps {
  params: Promise<{ category: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { category } = await params;
  const normalCategory = category.replaceAll("%20", " ");
  const books = await getBooksByCategory(normalCategory);

  console.log(books);

  return (
    <div className={css["page"]}>
      <h1>BOOKS PAGE FOR</h1>

      <ul>
        {books.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
