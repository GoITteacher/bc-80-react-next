"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./StudentsClient.module.css";
import { getStudents } from "@/services/studentsService";
import Link from "next/link";
import { useState } from "react";

const StudentsClient = () => {
  const [fullname, setFullname] = useState("");

  const studentsQuery = useQuery({
    queryKey: ["students", fullname],
    queryFn: () => getStudents(fullname),
    refetchOnMount: false,
  });

  const students = studentsQuery.data?.items || [];

  return (
    <main>
      <h1>STUDENTS PAGE</h1>

      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />

      <ul>
        {students.map((el) => {
          return (
            <li key={el._id}>
              <Link href={`/students/${el._id}`}>
                {el.firstName} {el.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default StudentsClient;
