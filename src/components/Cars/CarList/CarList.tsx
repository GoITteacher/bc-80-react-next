import { useQuery } from "@tanstack/react-query";
import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";
import { getCarList } from "../../../services/carsService";

const CarList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCarList({ perPage: 50 }),
  });

  const cars = data?.items ?? [];

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error ...</p>}
      {cars.length > 0 && (
        <ul className={css["car-list"]}>
          {cars.map((el) => {
            return <CarItem key={el._id} car={el} />;
          })}
        </ul>
      )}
    </>
  );
};

export default CarList;
