import { useQuery } from "@tanstack/react-query";
import { fetchCocktails } from "../services/cocktailService";
import { useDebounce } from "use-debounce";

export const useCocktails = (query: string) => {
  const [value] = useDebounce(query, 300);

  const { data } = useQuery({
    queryKey: ["cocktails", value],
    queryFn: () => fetchCocktails(value),
    refetchOnWindowFocus: true,
  });

  const cocktails = data || [];
  return cocktails;
};
