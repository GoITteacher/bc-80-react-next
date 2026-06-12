import { getAllProducts, getProductByCategory } from "@/lib/products-service";
import css from "./Page.module.css";
interface PageProps {
  params: Promise<{ slug: string[] }>;
}
const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const tag = slug[0];
  const isAllProducts = tag === "all";

  const res = await (isAllProducts
    ? getAllProducts()
    : getProductByCategory(tag));

  return (
    <div className={css["page"]}>
      <h1>{tag}</h1>

      <ul>
        {res.products.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
