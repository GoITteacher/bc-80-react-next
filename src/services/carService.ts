import axios from "axios";
import { Car } from "../types/cars";

interface GetCarListResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export const getCarList = async (make: string) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/cars";
  const url = BASE_URL + END_POINT;

  const params = {
    make: make,
  };

  const res = await axios.get<GetCarListResponse>(url, { params });
  return res.data;
};

// export const getCarList = async () => {};
// export const getCarList = async () => {};
// export const getCarList = async () => {};
// export const getCarList = async () => {};
