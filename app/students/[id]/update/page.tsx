import UpdateUserForm from "@/components/UpdateUserForm/UpdateUserForm";
import css from "./Page.module.css";

const Page = () => {
  return (
    <main className={css["page"]}>
      <h1>UPDATE USER</h1>
      <UpdateUserForm />
    </main>
  );
};

export default Page;
