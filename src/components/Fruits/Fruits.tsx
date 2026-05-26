import { useEffect, useState } from "react";
import css from "./Fruits.module.css";

const Fruits = () => {
  const [apples, setApples] = useState(() => {
    const jsonData = localStorage.getItem("apples") || "0";
    const apples = JSON.parse(jsonData) as number;
    return apples;
  });

  const [lemons, setLemons] = useState(() => {
    const lemonsJson = localStorage.getItem("lemons");

    if (lemonsJson) {
      return JSON.parse(lemonsJson) as number;
    }

    return 0;
  });

  useEffect(() => {
    localStorage.setItem("apples", JSON.stringify(apples));
    localStorage.setItem("lemons", JSON.stringify(lemons));
  }, [apples, lemons]);

  return (
    <div className={css["fruits"]}>
      <div className={css["list"]}>
        <p>Apples: {apples}</p>
        <p>Lemons: {lemons}</p>
      </div>

      <div className={css["list"]}>
        <button onClick={() => setApples(apples + 1)}>Apple++</button>
        <button onClick={() => setLemons(lemons + 1)}>Lemon++</button>
      </div>
    </div>
  );
};

export default Fruits;
