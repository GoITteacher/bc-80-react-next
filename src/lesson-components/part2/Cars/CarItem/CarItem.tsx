import { Car } from "../../../../types/cars";

interface CarItemProps {
  carData: Car;
}

const CarItem = ({ carData }: CarItemProps) => {
  return (
    <div>
      <p>
        {carData.make} {carData.model}
      </p>
      <p>{carData.price}</p>
      {carData.description && <p>{carData.description}</p>}
      <p>{carData.mileage}</p>
    </div>
  );
};

export default CarItem;
