import css from "./Page.module.css";
interface PageProps {
  params: Promise<{ slug: string[] }>;
}
const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const [year, city] = slug;

  return (
    <div className={css["page"]}>
      <h1>USERS</h1>
      <p>Year: {year}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default Page;
