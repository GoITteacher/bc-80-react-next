import css from "./Diagram3.module.css";

const sleep = (x: number) => new Promise((res) => setTimeout(res, x));

const Diagram = async () => {
  await sleep(8000);
  return <div className={css["diagram1"]}>Diagram1</div>;
};

export default Diagram;
