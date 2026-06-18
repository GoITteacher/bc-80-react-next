import { proxyServer } from "./serverConfig";

export const getCars = async (params: {}) => {
  const res = await proxyServer.get("/cars", { params });
  return res.data;
};
