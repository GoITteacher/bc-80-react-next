import {
  Car,
  CreateCarBody,
  GetCarsParams,
  GetCarsResponse,
  UpdateCarBody,
} from "../types/cars";
import { api } from "./serverConfig";

export const getCarList = async (params?: GetCarsParams) => {
  const res = await api.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};

export const deleteCarById = async (id: string) => {
  const res = await api.delete(`/public/cars/${id}`);
  return res.data;
};

export const createCar = async (carData: CreateCarBody) => {
  const res = await api.post<Car>(`/public/cars`, carData);
  return res.data;
};

export const updateCar = async ({ id, ...carData }: UpdateCarBody) => {
  const res = await api.put<Car>(`/public/cars/${id}`, carData);
  return res.data;
};
