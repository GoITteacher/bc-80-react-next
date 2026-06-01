import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./FormCreateCar.module.css";
import { createCar } from "../../../services/carsService";
import { CreateCarBody } from "../../../types/cars";

const FormCreateCar = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["create-car"],
    mutationFn: (carData: CreateCarBody) => createCar(carData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });

  const handleSubmit = (formData: FormData) => {
    const data = {
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      year: Number(formData.get("year")),
      color: formData.get("color") as string,
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),
      fuelType: formData.get("fuelType") as string,
      description: formData.get("description") as string,
    };

    if (data.year < 2000) {
      console.log("Invalid year");
      return;
    }

    if (data.price < 0) {
      console.log("Invalid price");
      return;
    }

    mutate(data);
  };

  return (
    <form className={css["create-form"]} action={handleSubmit}>
      <input type="text" name="make" placeholder="make" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="color" name="color" placeholder="color" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <input type="text" name="fuelType" placeholder="fuelType" />
      <textarea name="description" placeholder="description" rows={4} />
      <button type="submit">Додати Авто</button>
    </form>
  );
};

export default FormCreateCar;
