import { cookies } from "next/headers";
import { globalServer } from "../../serverConfig";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();

  const res = await globalServer.post("/auth/logout", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ success: true });
};
