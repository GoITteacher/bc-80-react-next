"use client";

import css from "./SayHello.module.css";

const SayHello = () => {
  const hadnleClick = () => {
    console.log("click");
  };
  return <button onClick={hadnleClick}>Say Hello</button>;
};

export default SayHello;
