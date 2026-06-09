import ClientSongList from "@/components/ClientSongList/ClientSongList";
import css from "./Page.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSongs } from "@/services/songsService";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["songs"],
    queryFn: () => getSongs(),
  });

  return (
    <div className={css["page"]}>
      <h1>Гібридний запит</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientSongList />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
