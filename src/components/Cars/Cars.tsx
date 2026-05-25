import { useState } from "react";
import { getCarList } from "../../services/carService";
import { Car } from "../../types/cars";
import CarList from "./CarList/CarList";
import css from "./Cars.module.css";
import SearchForm from "./SearchForm/SearchForm";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const onSearchCars = async (make: string) => {
    const res = await getCarList(make);
    setCars(res.items);
  };

  return (
    <div className={css["cars"]}>
      <SearchForm callback={onSearchCars} />
      <CarList cars={cars} />
    </div>
  );
};

export default Cars;

//!=========================================
