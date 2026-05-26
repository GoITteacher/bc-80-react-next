import { useState } from "react";
import css from "./Greeting.module.css";

const Greeting = () => {
  const [message, setMessage] = useState(() => {
    const date = new Date();
    const hours = date.getHours() - 3;
    if (hours > 5 && hours < 11) {
      return "Доброго ранку";
    } else if (hours >= 11 && hours < 16) {
      return "Доброго дня";
    } else if (hours >= 16 && hours < 20) {
      return "Добрий вечір";
    } else {
      return "Доброї ночі";
    }
  });

  return (
    <div className={css["greeting"]}>
      <h4>{message}</h4>
    </div>
  );
};

export default Greeting;
