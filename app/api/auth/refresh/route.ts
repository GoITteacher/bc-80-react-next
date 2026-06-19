import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../serverConfig";
import { parse } from "cookie";

export const POST = async (req: NextRequest) => {
  const cookieStore = await cookies();

  if (cookieStore.get("accessToken")) {
    return NextResponse.json({ success: true });
  }

  if (!cookieStore.get("refreshToken")) {
    return NextResponse.json({ success: false });
  }

  const res = await globalServer.post("/auth/refresh", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

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

  return NextResponse.json({ success: true });
};
