import { GetSongsResponse } from "../types/songs";
import { server } from "./serverConfig";

export const getSongs = async (artist: string, page: number) => {
  const params = {
    artist: artist,
    page: page,
    perPage: 4,
  };

  const res = await server.get<GetSongsResponse>("/public/songs", { params });
  return res.data;
};
