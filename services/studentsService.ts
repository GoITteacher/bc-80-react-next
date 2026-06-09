import { GetStudentsResponse, Student } from "@/types/students";
import { api } from "./serverConfig";

export const getStudents = async (firstname: string) => {
  const params = {
    perPage: 100,
    firstName: firstname,
  };

  const res = await api.get<GetStudentsResponse>("/public/students", {
    params,
  });
  return res.data;
};
export const getStudentById = async (id: string) => {
  const res = await api.get<Student>(`/public/students/${id}`);
  return res.data;
};
