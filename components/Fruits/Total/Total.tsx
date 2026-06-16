"use client";

import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./Total.module.css";

const Total = () => {
  const { apples, lemons, oranges } = useFruitsStore();

  return (
    <div className={css["total"]}>
      <p>Total: {apples + lemons + oranges}</p>
    </div>
  );
};

export default Total;
