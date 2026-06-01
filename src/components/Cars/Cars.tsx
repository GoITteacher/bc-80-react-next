import CarList from "./CarList/CarList";
import css from "./Cars.module.css";
import { Flex } from "antd";
import FormCreateCar from "./FormCreateCar/FormCreateCar";

const Cars = () => {
  return (
    <div className={css["container"]}>
      <Flex justify="space-between">
        <FormCreateCar />
      </Flex>
      <CarList />
    </div>
  );
};

export default Cars;
