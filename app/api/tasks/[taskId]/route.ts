import { NextRequest } from "next/server";
import { globalServer } from "../../serverConfig";

interface ParamsProps {
  params: Promise<{ taskId: string }>;
}

export const GET = async () => {};

export const PATCH = async (req: NextRequest, { params }: ParamsProps) => {
  const body = await req.json();
  const { taskId } = await params;
  const res = await globalServer.patch(`/tasks/${taskId}`, body);
};

export const DELETE = async () => {};
