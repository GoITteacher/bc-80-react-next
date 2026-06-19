import { cookies } from "next/headers";
import { proxyServer } from "./serverConfig";
import { parse } from "cookie";

export const serverRefresh = async () => {
  const cookieStorage = await cookies();

  const res = await proxyServer.post<{ success: boolean }>(
    "/auth/refresh",
    null,
    {
      headers: {
        Cookies: cookieStorage.toString(),
      },
    }
  );

  const cookieHeaders = res.headers["set-cookie"];

  if (cookieHeaders) {
    const cookieArr = Array.isArray(cookieHeaders)
      ? cookieHeaders
      : [cookieHeaders];

    for (const cookieStr of cookieArr) {
      const cookieObj = parse(cookieStr);

      const options = {
        maxAge: Number(cookieObj["Max-Age"]),
        path: cookieObj.Path,
        expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
      };

      if (cookieObj.accessToken) {
        cookieStorage.set("accessToken", cookieObj.accessToken, options);
      }

      if (cookieObj.refreshToken) {
        cookieStorage.set("refreshToken", cookieObj.refreshToken, options);
      }
    }
  }

  return res.data;
};
