import { useState } from "react";
import css from "./CounterExample.module.css";

const CounterExample = () => {
  const [x, setX] = useState(0);

  const handleClick = () => {
    setX(x + 1);
    console.log(x);
  };

  return (
    <div className={css["counterExample"]}>
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {x}</p>
    </div>
  );
};

export default CounterExample;
