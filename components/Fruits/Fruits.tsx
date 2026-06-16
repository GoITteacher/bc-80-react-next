import FruitsController from "./Controllers/FruitsController";
import css from "./Fruits.module.css";
import Info from "./Info/Info";
import Total from "./Total/Total";

const Fruits = () => {
  return (
    <div className={css["fruits"]}>
      <Total />
      <Info />
      <FruitsController />
    </div>
  );
};

export default Fruits;
