import { getCategoryList } from "@/services/books";
import css from "./CategoryList.module.css";
import Link from "next/link";

const CategoryList = async () => {
  const categoryList = await getCategoryList();

  return (
    <div className={css["categoryList"]}>
      {categoryList.map((el) => {
        return (
          <li>
            <Link href={`/books/${el.list_name}`}>{el.list_name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default CategoryList;
