import SearchForm from "./SearchForm/SearchForm";
import SongList from "./SongList/SongList";
import css from "./App.module.css";
import { getSongs } from "../services/songService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function App() {
  const [artist, setArtist] = useState("");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["songs", artist],
    queryFn: () => getSongs(artist),
  });

  const songs = data?.items || [];

  const onSubmit = (query: string) => {
    setArtist(query);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>🎵 Song Search</h1>
        <p className={css.subtitle}>Find songs and artists</p>
      </header>

      <SearchForm callback={onSubmit} />

      {isLoading && (
        <div className={css.statusContainer}>
          <p className={css.loading}>⏳ Loading songs...</p>
        </div>
      )}

      {isError && (
        <div className={css.statusContainer}>
          <p className={css.error}>❌ Error loading songs. Please try again.</p>
        </div>
      )}

      {!isLoading && !isError && (
        <section className={css.contentSection}>
          <SongList items={songs} />
        </section>
      )}
    </div>
  );
}
