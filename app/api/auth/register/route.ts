import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../../serverConfig";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/auth/register", body);
  return NextResponse.json(res.data);
};
