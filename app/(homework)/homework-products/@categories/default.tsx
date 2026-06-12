import { getCategoryList } from "@/lib/products-service";
import css from "./Default.module.css";
import Link from "next/link";

const Default = async () => {
  const array = await getCategoryList();

  return (
    <div className={css["default"]}>
      <ul>
        <li>
          <Link href="/homework-products/all">All</Link>
        </li>
        {array.map((el) => {
          return (
            <li>
              <Link href={`/homework-products/${el}`}>{el}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Default;
