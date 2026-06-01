import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car } from "../../../../types/cars";
import css from "./CarItem.module.css";
import { Flex } from "antd";
import { deleteCarById } from "../../../../services/carsService";
import { useState } from "react";
import Modal from "../../../Tasks/Modal/Modal";
import FormUpdateCar from "../../FormUpdateCar/FormUpdateCar";
interface CarItemProps {
  car: Car;
}
const CarItem = ({ car }: CarItemProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const queryClient = useQueryClient();

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const { mutate } = useMutation({
    mutationKey: ["deleteCar"],
    mutationFn: () => deleteCarById(car._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
      console.log("Success");
    },
  });

  return (
    <li className={css["car-item"]}>
      <Flex gap="large">
        <p>
          {car.make} - {car.model}
        </p>
        <p>{car.price}</p>
        <p>{car.mileage}</p>
        <p>{car.year}</p>
      </Flex>
      <Flex gap="small">
        <button className={css["sell-btn"]} onClick={openModal}>
          Update
        </button>
        <button onClick={() => mutate()} className={css["remove-btn"]}>
          Видалити
        </button>
      </Flex>

      {isOpenModal && (
        <Modal onClose={closeModal}>
          <FormUpdateCar car={car} handleSuccess={closeModal} />
        </Modal>
      )}
    </li>
  );
};

export default CarItem;
