import Footer from "@/components/Footer/Footer";
import { getSongs } from "@/services/songsService";

const Page = async () => {
  const res = await getSongs();

  return (
    <main>
      <h1>SONGS</h1>
      <ul>
        {res.items.map((el) => {
          return <li key={el._id}>{el.title}</li>;
        })}
      </ul>
    </main>
  );
};

export default Page;
