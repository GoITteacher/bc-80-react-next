import BackButton from "@/components/BackButton/BackButton";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <BackButton />
      </div>
    </div>
  );
};

export default Page;
