import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car, UpdateCarBody } from "../../../types/cars";
import css from "./FormUpdateCar.module.css";
import { updateCar } from "../../../services/carsService";
interface FormUpdateCar {
  car: Car;
  handleSuccess: () => void;
}

const FormUpdateCar = ({ car, handleSuccess }: FormUpdateCar) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["update-car"],
    mutationFn: (data: UpdateCarBody) => updateCar(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      handleSuccess();
    },
  });

  const handleSubmit = (formData: FormData) => {
    const data = {
      id: formData.get("_id") as string,
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      year: Number(formData.get("year")),
      color: formData.get("color") as string,
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),
      fuelType: formData.get("fuelType") as string,
      description: formData.get("description") as string,
    };

    mutate(data);
  };
  return (
    <form className={css["update-form"]} action={handleSubmit}>
      <input type="text" name="_id" placeholder="_id" defaultValue={car._id} />
      <input
        type="text"
        name="make"
        placeholder="make"
        defaultValue={car.make}
      />
      <input
        type="text"
        name="model"
        placeholder="model"
        defaultValue={car.model}
      />
      <input
        type="number"
        name="year"
        placeholder="year"
        defaultValue={car.year}
      />
      <input
        type="color"
        name="color"
        placeholder="color"
        defaultValue={car.color}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        defaultValue={car.price}
      />
      <input
        type="number"
        name="mileage"
        placeholder="mileage"
        defaultValue={car.mileage}
      />
      <input
        type="text"
        name="fuelType"
        placeholder="fuelType"
        defaultValue={car.fuelType}
      />
      <textarea
        name="description"
        placeholder="description"
        defaultValue={car.description}
        rows={4}
      />
      <button type="submit">Оновити авто</button>
    </form>
  );
};

export default FormUpdateCar;
