"use client";
import { useRouter } from "next/navigation";
import css from "./BackHome.module.css";

const BackHome = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/cocktail");
  };

  return (
    <button className={css["backHome"]} onClick={handleClick}>
      Back Home
    </button>
  );
};

export default BackHome;
