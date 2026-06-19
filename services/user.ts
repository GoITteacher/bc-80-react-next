import { proxyServer } from "./serverConfig";

export async function updateAvatar(formData: FormData) {
  const res = await proxyServer.put("/user/avatar", formData);
}
