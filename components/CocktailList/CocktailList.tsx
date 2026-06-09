"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./CocktailList.module.css";
import { getRandomCocktails } from "@/services/cocktailsService";

const CocktailList = () => {
  const cocktailsQuery = useQuery({
    queryKey: ["cocktails"],
    queryFn: () => getRandomCocktails(),
    refetchOnMount: false,
  });

  const arr = cocktailsQuery.data || [];

  return (
    <div className={css["cocktailList"]}>
      <button onClick={() => cocktailsQuery.refetch()}>
        Get Random Cocktails
      </button>
      <ul>
        {arr.map((el) => {
          return (
            <li>
              <img src={el.drinkThumb} alt="" width={100} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CocktailList;

//!=========================================
