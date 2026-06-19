import { AuthResponse, LoginBody, RegisterBody, User } from "@/types/auth";
import { proxyServer } from "./serverConfig";

export const register = async (body: RegisterBody) => {
  const res = await proxyServer.post<AuthResponse>("/auth/register", body);
  return res.data;
};

export const login = async (body: LoginBody) => {
  const res = await proxyServer.post<AuthResponse>("/auth/login", body);
  return res.data;
};

export const logout = async () => {
  const res = await proxyServer.post("/auth/logout");
  return res.data;
};

export const refresh = async () => {
  const res = await proxyServer.post<{ success: boolean }>(
    "/auth/refresh",
    null
  );
  return res.data;
};
export const getMe = async () => {
  const res = await proxyServer.get<User>("/auth/me");
  return res.data;
};
