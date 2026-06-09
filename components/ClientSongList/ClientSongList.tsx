"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./ClientSongList.module.css";
import { getSongs } from "@/services/songsService";

const ClientSongList = () => {
  const songsQuery = useQuery({
    queryKey: ["songs"],
    queryFn: () => getSongs(),
    refetchOnMount: false,
  });

  const songs = songsQuery.data?.items || [];

  return (
    <div>
      <ul className={css["songList"]}>
        {songs.map((el) => {
          return <li key={el._id}>{el.title}</li>;
        })}
      </ul>

      <button onClick={() => songsQuery.refetch()}>Refetch</button>
    </div>
  );
};

export default ClientSongList;
