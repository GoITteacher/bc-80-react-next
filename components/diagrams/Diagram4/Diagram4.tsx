import css from "./Diagram4.module.css";

const sleep = (x: number) => new Promise((res) => setTimeout(res, x));

const Diagram = async () => {
  await sleep(12000);
  return <div className={css["diagram1"]}>Diagram4</div>;
};

export default Diagram;
