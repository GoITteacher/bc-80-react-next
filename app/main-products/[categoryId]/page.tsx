import css from "./Page.module.css";
interface PageProps {
  params: Promise<{ categoryId: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { categoryId } = await params;
  return <div className={css["page"]}>Category Page {categoryId}</div>;
};

export default Page;
