import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import StudentsClient from "./Students.client";
import { getStudents } from "@/services/studentsService";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["students", ""],
    queryFn: () => getStudents(""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StudentsClient />
    </HydrationBoundary>
  );
};

export default Page;
