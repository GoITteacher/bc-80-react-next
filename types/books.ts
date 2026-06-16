export interface GetBooksParams {
  page?: number;
  perPage?: number;
  title?: string;
  author?: string;
  desc?: string;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBooksResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Book[];
}

export interface NewBook {
  title: string;
  author: string;
  desc: string;
}
