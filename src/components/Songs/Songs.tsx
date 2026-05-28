import { useState } from "react";
import { getSongs } from "../../services/songService";
import css from "./Songs.module.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import SearchForm from "../SearchForm/SearchForm";
import SongList from "./SongList/SongList";
import ReactPaginate from "react-paginate";
import Pagination from "../Pagination/Pagination";

interface ChangePageEvent {
  selected: number;
}

const Songs = () => {
  const [artist, setArtist] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["songs", { artist, currentPage }],
    queryFn: () => getSongs(artist, currentPage),
    placeholderData: keepPreviousData,
  });

  const songs = data?.items || [];
  const totalPages = data?.totalPages || 1;

  const onSubmit = (query: string) => {
    setArtist(query);
    setCurrentPage(1);
  };

  const handlePageChange = (e: ChangePageEvent) => {
    setCurrentPage(e.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      {!isLoading && !isError && artist && (
        <section className={css.contentSection}>
          <div className={css.infoBox}>
            <p className={css.infoText}>
              Artist: <span className={css.infoHighlight}>{artist}</span>
            </p>
            <p className={css.infoText}>
              Page: <span className={css.infoHighlight}>{currentPage}</span> of{" "}
              <span className={css.infoHighlight}>{totalPages}</span>
            </p>
          </div>

          <SongList items={songs} />

          {totalPages > 1 && (
            <div className={css.paginationWrapper}>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                handleChange={setCurrentPage}
              />
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Songs;
