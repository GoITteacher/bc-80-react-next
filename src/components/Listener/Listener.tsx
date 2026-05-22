import css from "./Listener.module.css";

const Listener = () => {
  const handleBtnClick1 = (event: React.MouseEvent) => {};

  const handleBtnClick2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("Btn 2");
  };

  return (
    <div className={css["listener"]}>
      <button onClick={handleBtnClick1}>Click Me 1</button>
      <button onClick={handleBtnClick2}>Click Me 2</button>

      <input type="text" onChange={(e) => {}} />

      <form action="" onSubmit={(e) => {}}></form>
    </div>
  );
};

export default Listener;
