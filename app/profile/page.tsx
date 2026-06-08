import ProfileForm from "@/components/ProfileForm/ProfileForm";
import css from "./page.module.css";

const Page = () => {
  console.log("Hello page");

  return (
    <div className={css["page"]}>
      <h1>Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default Page;
