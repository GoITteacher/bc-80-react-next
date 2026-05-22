import { useState } from "react";
import css from "./ArrayExample.module.css";

const ArrayExample = () => {
  const [arr, setArr] = useState<number[]>([]);

  const handleClick = () => {
    const random = Math.round(Math.random() * 9);
    setArr([...arr, random]);
  };

  return (
    <div className={css["arrayExample"]}>
      <button onClick={handleClick}>Arr Random Number</button>

      <ul>
        {arr.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayExample;
