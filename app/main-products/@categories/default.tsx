import { getCategoryList } from "@/lib/products-service";
import css from "./Default.module.css";
import Link from "next/link";

const Default = async () => {
  const arr = await getCategoryList();
  return (
    <div className={css["default"]}>
      {arr.map((el) => {
        return (
          <li>
            <Link href={`/main-products/${el}`}>{el}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Default;
