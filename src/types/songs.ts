export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetSongsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Song[];
}

export interface GetSongsParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: "asc" | "desc";
  title?: string;
  artist?: string;
  genre?: string;
  releaseYear?: number;
  label?: string;
  language?: string;
}
