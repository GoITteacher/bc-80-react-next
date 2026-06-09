"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./SongList.module.css";
import { getSongs } from "@/services/songsService";

const SongList = () => {
  const songsQuery = useQuery({
    queryKey: ["songs"],
    queryFn: () => getSongs(),
  });
  const songs = songsQuery.data?.items || [];

  return (
    <ul className={css["songList"]}>
      {songs.map((el) => {
        return <li key={el._id}>{el.title}</li>;
      })}
    </ul>
  );
};

export default SongList;
