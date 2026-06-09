import { getStudentById } from "@/services/studentsService";
import css from "./Page.module.css";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await getStudentById(id);

  return (
    <main className={css["page"]}>
      <h1>STUDENT DETAILS</h1>
      <p>ID: {id}</p>
      <p>
        {res.firstName} {res.lastName}
      </p>
      <p>{res.cohortYear}</p>
      <p>{res.major}</p>
      <p>{res.enrolled}</p>

      <Link href={`/students/${id}/update`}>Update User</Link>
    </main>
  );
};

export default Page;
