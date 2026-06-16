"use client";
import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./Info.module.css";

const Info = () => {
  const apples = useFruitsStore((s) => s.apples);
  const lemons = useFruitsStore((s) => s.lemons);

  // const { apples, lemons } = useFruitsStore();

  return (
    <div className={css["info"]}>
      <h5>Info</h5>
      <p>Apples: {apples}</p>
      <p>Lemons: {lemons}</p>
    </div>
  );
};

export default Info;
