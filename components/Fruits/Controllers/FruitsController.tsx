"use client";
import { useFruitsStore } from "@/stores/fruitsStore";
import AppleBtn from "./AppleBtn/AppleBtn";
import css from "./FruitsController.module.css";
import LemonBtn from "./LemonBtn/LemonBtn";
import OrangeBtn from "./OrangeBtn/OrangeBtn";

const FruitsController = () => {
  const clearStore = useFruitsStore((s) => s.clearStore);

  return (
    <div className={css["fruitsController"]}>
      <AppleBtn />
      <OrangeBtn />
      <LemonBtn />

      <button onClick={clearStore}>Clear Store</button>
    </div>
  );
};

export default FruitsController;
