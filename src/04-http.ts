/**
 * Типізація HTTP-запитів з Axios.
 *
 * План:
 * - Generics у axios.get/post для типізації даних.
 * - Опис контрактів відповіді (DTO) і вкладених полів.
 * - Типізація запитів: params/body, коди відповіді.
 * - Обробка помилок AxiosError (unknown -> звуження).
 * - Завдання: прибрати any/unknown, додати контракти для постів.
 */

import axios, { AxiosError } from "axios";

// import axios from "axios";
// import type { GetStudentsResponse } from "./types/students";

// async function getStudents() {
//   const url =
//     "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com/public/students?page=1&perPage=10&sortOrder=desc";

//   const res = await axios.get<GetStudentsResponse>(url);
//   return res.data;
// }

// document.addEventListener("DOMContentLoaded", async () => {
//   const res = await getStudents();
// });

//!======================================================
// axios.get<T> повертає Promise<AxiosResponse<T>>; data матиме тип T.
//!======================================================
// DTO: описуємо структуру відповіді/запиту окремими типами, щоб не дублювати.
//!======================================================
// Помилки: catch отримує unknown; звужуємо через axios.isAxiosError.
//!======================================================
/* 🧩 Task 1 — модель поста
 * Опиши Post з полями id/title/body/tags/reactions/views/userId.
 */
// export type Post = any;

/* 🧩 Task 2 — отримати всі пости
 * Типізуй відповідь від dummyjson.com/posts (posts, total, skip, limit).
 */

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface GetAllPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export async function getAllPosts() {
  try {
    const response = await axios.get<GetAllPostsResponse>(
      "https://dummyjson.com/posts",
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response?.data);
  }
}

/* 🧩 Task 3 — отримати пост за id
 * Додай тип для поста і параметра postId без any.
 */
export async function getPostById(postId: string) {
  const response = await axios.get<Post>(
    `https://dummyjson.com/posts/${postId}`,
  );
  return response.data;
}

/* 🧩 Task 4 — створити пост
 * Типізуй тіло запиту (title/body/tags) та відповідь.
 */

export type NewPost = {
  title: string;
  body: string;
  tags: string[];
};

export async function createPost(newPost: NewPost): Promise<Post> {
  const response = await axios.post<Post>(
    "https://dummyjson.com/posts/add",
    newPost,
  );
  return response.data;
}
