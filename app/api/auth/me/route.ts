import { cookies } from "next/headers";
import { globalServer } from "../../serverConfig";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = await cookies();

  const res = await globalServer.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return NextResponse.json(res.data)
};
