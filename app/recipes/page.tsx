import RecipeList from "@/components/RecipeList/RecipeList";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Recipes</h1>
      <RecipeList />
    </div>
  );
};

export default Page;
