import axios from "axios";

export const getCars = async (page: number) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/cars";
  const url = BASE_URL + END_POINT;

  const params = {
    page: page,
    perPage: 10,
  };

  const res = await axios.get(url, { params });
  return res.data;
};

export const getCarsByModel = async (model: string, page: number) => {
  const BASE_URL = "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com";
  const END_POINT = "/public/cars";
  const url = BASE_URL + END_POINT;

  const params = {
    make: model,
    page: page,
    perPage: 5,
  };

  const res = await axios.get(url, { params });
  return res.data;
};
