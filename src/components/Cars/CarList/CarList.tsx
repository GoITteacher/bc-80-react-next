import { Car } from "../../../types/cars";
import css from "./CarList.module.css";
interface CarListProps {
  cars: Car[];
}

const CarList = ({ cars }: CarListProps) => {
  return (
    <ul className={css["carList"]}>
      {cars.map((car) => {
        return (
          <li key={car._id}>
            {car.make} - {car.model}
          </li>
        );
      })}
    </ul>
  );
};

export default CarList;
