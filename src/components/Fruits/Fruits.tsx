import { useState } from "react";
import css from "./Fruits.module.css";
import AppleCounter from "./AppleCounter/AppleCounter";
import GrapesCounter from "./GrapesCounter/GrapesCounter";
import LemonCounter from "./LemonCounter/LemonCounter";
import FruitsCounter from "./FruitsCounter/FruitsCounter";

const Fruits = () => {
  const [apples, setApples] = useState(0);
  const [grapes, setGrapes] = useState(0);
  const [lemon, setLemon] = useState(0);

  const incrementApple = () => {
    setApples(apples + 1);
  };

  const incrementGrapes = () => {
    setGrapes(grapes + 1);
  };

  const incrementLemon = () => {
    setLemon(lemon + 1);
  };

  return (
    <div className={css["fruits"]}>
      <h2>Fruits</h2>
      <FruitsCounter apples={apples} grapes={grapes} lemons={lemon} />

      <AppleCounter incrementApple={incrementApple} />
      <GrapesCounter incrementGrapes={incrementGrapes} />
      <LemonCounter incrementLemon={incrementLemon} />
    </div>
  );
};

export default Fruits;
