"use client";

import { useFruitsStore } from "@/stores/fruitsStore";
import css from "./AppleBtn.module.css";

const AppleBtn = () => {
  const setApples = useFruitsStore((s) => s.setApples);
  const apples = useFruitsStore((s) => s.apples);

  return (
    <div className={css["appleBtn"]}>
      <button
        onClick={() => {
          setApples(apples + 5);
        }}
      >
        Apple ++
      </button>
    </div>
  );
};

export default AppleBtn;
