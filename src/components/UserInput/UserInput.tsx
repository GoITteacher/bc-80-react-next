import { useRef, useState } from "react";
import css from "./UserInput.module.css";

const UserInput = () => {
  const inputElem = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    const value = inputElem.current?.value as string;

    const index = value.indexOf("@");

    if (index > 0) {
      const nickname = value.slice(0, index);
      console.log(nickname);
      setInputValue(nickname);
    }
  };

  return (
    <div className={css["userInput"]}>
      <input type="text" ref={inputElem} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default UserInput;
