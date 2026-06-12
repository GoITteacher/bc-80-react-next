"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./RecipeList.module.css";
import { searchRecipes } from "@/lib/recipes-service";
import { useState } from "react";
import Link from "next/link";

const RecipeList = () => {
  const [query, setQuery] = useState("");

  const recipeQuery = useQuery({
    queryKey: ["recipes", query],
    queryFn: () => searchRecipes(query),
  });

  const list = recipeQuery.data?.recipes || [];

  return (
    <div className={css["recipeList"]}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {list.map((el) => {
          return (
            <li>
              <Link href={`/recipes/${el.id}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
