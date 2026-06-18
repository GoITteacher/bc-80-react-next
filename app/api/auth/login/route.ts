import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../serverConfig";
import { parse } from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/auth/login", body);

  const cookieStore = await cookies();
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
        cookieStore.set("accessToken", cookieObj.accessToken, options);
      }

      if (cookieObj.refreshToken) {
        cookieStore.set("refreshToken", cookieObj.refreshToken, options);
      }
    }
  }

  return NextResponse.json(res.data);
};
