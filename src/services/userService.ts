import axios from "axios";
import { User } from "../types/users";

export const getUsers = async (name: string) => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const params = {
    "name:contains": name,
  };

  const res = await axios.get<User[]>(url, { params });
  return res.data;
};
