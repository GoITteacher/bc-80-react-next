"use client";

import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./OrangeBtn.module.css";

const OrangeBtn = () => {
  const oranges = useFruitsStore((s) => s.oranges);
  const setOranges = useFruitsStore((s) => s.setOranges);

  return (
    <div className={css["orangeBtn"]}>
      <button
        onClick={() => {
          setOranges(oranges + 1);
        }}
      >
        Oranges ++
      </button>
    </div>
  );
};

export default OrangeBtn;
