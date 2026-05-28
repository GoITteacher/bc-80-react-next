import { GetCarsResponse } from "../types/cars";
import { server } from "./serverConfig";

interface GetCarsParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: "asc" | "desc";
  make?: string;
  model?: string;
  color?: string;
  fuelType?: string;
  year?: number;
}
export const getCars = async (params?: GetCarsParams) => {
  const res = await server.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};
