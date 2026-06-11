import { getRandomCocktails } from "@/services/cocktails";
import css from "./Page.module.css";
import BackHome from "@/components/BackHome/BackHome";

const sleep = (x: number) => new Promise((res) => setTimeout(res, x));
const Page = async () => {
  await sleep(3000);
  const arr = await getRandomCocktails();

  return (
    <div className={css["page"]}>
      <h1>Cocktails</h1>
      <BackHome />
      <ul>
        {arr.map((el) => {
          return <li>{el.drink}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
