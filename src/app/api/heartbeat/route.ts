import prisma from '@/lib/prisma';
import { ok, serverError } from '@/lib/response';

export async function GET() {
  try {
    await prisma.client.$queryRaw`SELECT 1`;
    return ok();
  } catch (e) {
    return serverError(e);
  }
}
