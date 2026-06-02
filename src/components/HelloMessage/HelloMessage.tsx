import css from "./HelloMessage.module.css";

const HelloMessage = () => {
  return (
    <div className={css["helloMessage"]}>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
};

export default HelloMessage;
