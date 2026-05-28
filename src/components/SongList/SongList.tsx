import { Song } from "../../types/songs";
import css from "./SongList.module.css";

interface SongListProps {
  items: Song[];
}

const SongList = ({ items }: SongListProps) => {
  if (items.length === 0) {
    return (
      <div className={css.emptyState}>
        <div className={css.emptyStateIcon}>♪</div>
        <p className={css.emptyStateText}>
          No songs found. Try searching for an artist!
        </p>
      </div>
    );
  }

  return (
    <ul className={css.songList}>
      {items.map((el) => {
        return (
          <li key={el._id} className={css.songItem}>
            <p className={css.songTitle}>{el.title}</p>
            <p className={css.songArtist}>{el.artist}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SongList;
