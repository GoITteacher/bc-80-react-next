import { NextRequest, NextResponse } from "next/server";
import { globalServer } from "../serverConfig";

export const GET = async (request: NextRequest) => {
  const params = Object.fromEntries(request.nextUrl.searchParams.entries());
  const res = await globalServer.get("/public/cars", { params });
  return NextResponse.json(res.data);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const res = await globalServer.post("/public/cars", body);
  return NextResponse.json(res.data);
};
