export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCarBody {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
}

export interface UpdateCarBody {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
}

export interface GetCarsParams {
  page?: number;
  perPage?: number;
  make?: string;
  model?: string;
}

export interface GetCarsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}
