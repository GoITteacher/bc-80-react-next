import { useQuery } from "@tanstack/react-query";
import css from "./Cocktails.module.css";
import { fetchCocktails } from "../../services/cocktailService";
import CocktailCard from "./CocktailCard/CocktailCard";
import { useCocktails } from "../../hooks/useCocktails";

interface CocktailsProps {
  query: string;
}

const Cocktails = ({ query }: CocktailsProps) => {
  const cocktails = useCocktails(query);

  return (
    <ul className={css["cocktails"]}>
      {cocktails.map((el) => {
        return <CocktailCard key={el._id} data={el} />;
      })}
    </ul>
  );
};

export default Cocktails;
