import { Car } from "../../../types/cars";
import css from "./CarList.module.css";

interface CarListProps {
  items: Car[];
}

const CarList = ({ items }: CarListProps) => {
  return (
    <ul className={css["carList"]}>
      {items.map((el) => {
        return (
          <li key={el._id}>
            {el.make} - {el.model}
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
