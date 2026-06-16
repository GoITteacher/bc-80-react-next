"use client";

import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./LemonBtn.module.css";

const LemonBtn = () => {
  const setLemons = useFruitsStore((s) => s.setLemons);
  const lemons = useFruitsStore((s) => s.lemons);

  return (
    <div className={css["lemonBtn"]}>
      <button
        onClick={() => {
          setLemons(lemons + 5);
        }}
      >
        Lemons ++
      </button>
    </div>
  );
};

export default LemonBtn;
