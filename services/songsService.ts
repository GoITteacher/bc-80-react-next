import { GetSongsResponse } from "@/types/songs";
import { api } from "./serverConfig";

export const getSongs = async () => {
  const res = await api.get<GetSongsResponse>("/public/songs");
  return res.data;
};
