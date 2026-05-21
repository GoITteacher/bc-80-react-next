import { Car } from "../../../types/cars";
import CarItem from "./CarItem/CarItem";

const carsArr: Car[] = [
  {
    _id: "69caa8be0ab88a47b4290db1",
    make: "Tesla",
    model: "universal",
    year: 2024,
    color: "green",
    price: 50000,
    mileage: 10000,
    fuelType: "electric",
    description: "'Super puper'",
    createdAt: "2026-03-30T16:45:50.082Z",
    updatedAt: "2026-03-30T16:45:50.082Z",
  },
  {
    _id: "69caa6bf0ab88a47b4290da3",
    make: "Mazda",
    model: "sedan",
    year: 2020,
    color: "black",
    price: 20000,
    mileage: 20000,
    fuelType: "gasoline",
    createdAt: "2026-03-30T16:37:19.828Z",
    updatedAt: "2026-03-30T17:38:13.768Z",
  },
  {
    _id: "69c96d1cdabf9bb762433c35",
    make: "Carens",
    model: "Universal",
    year: 2017,
    color: "gray",
    price: 4000,
    mileage: 200000,
    fuelType: "gasoline",
    description: "Familly car in good condition",
    createdAt: "2026-03-29T18:19:08.103Z",
    updatedAt: "2026-03-29T18:19:08.103Z",
  },
  {
    _id: "698729184946769d34f3e1dd",
    make: "Opel",
    model: "LX",
    year: 1998,
    color: "ruby",
    price: 44,
    mileage: 24865,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
    updatedAt: "2026-03-30T19:38:30.639Z",
  },
  {
    _id: "698729184946769d34f3e1dc",
    make: "Orion",
    model: "Sport",
    year: 2022,
    color: "black",
    price: 51779,
    mileage: 94027,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1d6",
    make: "Horizon",
    model: "Sport",
    year: 2021,
    color: "black",
    price: 53216,
    mileage: 49124,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1d7",
    make: "Atlas",
    model: "Prime",
    year: 2015,
    color: "black",
    price: 74111,
    mileage: 57715,
    fuelType: "diesel",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1de",
    make: "Atlas",
    model: "Sport",
    year: 2020,
    color: "white",
    price: 19984,
    mileage: 33476,
    fuelType: "hybrid",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1d8",
    make: "Orion",
    model: "LX",
    year: 2017,
    color: "ruby",
    price: 31692,
    mileage: 117968,
    fuelType: "diesel",
    description: "Seeded car entry ready for showcase.",
  },
  {
    _id: "698729184946769d34f3e1d2",
    make: "Orion",
    model: "GT",
    year: 2021,
    color: "black",
    price: 25231,
    mileage: 112125,
    fuelType: "gasoline",
    description: "Seeded car entry ready for showcase.",
  },
];

const Cars = () => {
  return (
    <div>
      <ul>
        {carsArr.map((car, i) => {
          return (
            <li key={car._id}>
              <CarItem carData={car} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cars;
