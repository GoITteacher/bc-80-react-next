import { useState } from "react";
import css from "./ObjectExample.module.css";

interface Fruits {
  apples: number;
  lemons: number;
  oranges: number;
  grapes: number;
}

const ObjectExample = () => {
  const [fruits, setFruits] = useState<Fruits>({
    apples: 0,
    lemons: 0,
    oranges: 0,
    grapes: 0,
  });

  // const handleIncrementApple = () => {
  //   setFruits({ ...fruits, apples: fruits.apples + 1 });
  // };
  // const handleIncrementLemon = () => {
  //   setFruits({ ...fruits, lemons: fruits.lemons + 1 });
  // };

  const incrementFruits = (key: keyof Fruits) => {
    setFruits({ ...fruits, [key]: fruits[key] + 1 });
  };

  return (
    <div className={css["objectExample"]}>
      <p>Apples: {fruits.apples}</p>
      <p>Lemons: {fruits.lemons}</p>

      <button onClick={() => incrementFruits("apples")}>Apples++</button>
      <button onClick={() => incrementFruits("lemons")}>Lemons++</button>
    </div>
  );
};

export default ObjectExample;
