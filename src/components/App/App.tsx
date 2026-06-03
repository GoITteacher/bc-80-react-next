import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import Cocktails from "../Cocktails/Cocktails";
import { useDebounce } from "use-debounce";
import { Toaster } from "react-hot-toast";
import { useHello } from "../../hooks/useHello";
import { useDebounceCallback } from "../../hooks/useDebounceCallback";

export default function App() {
  const [query, setQuery] = useState("");
  useHello();

  const query2 = useDebounceCallback(query, 1000);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1>Cocktails</h1>
        <SearchBox value={query} setValue={setQuery} />
        <p>query: {query}</p>
        <p>quer2: {query2}</p>
      </header>

      <Cocktails query={query} />

      <Toaster />
    </div>
  );
}
