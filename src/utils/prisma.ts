import { Prisma, PrismaClient } from "@prisma/client";

declare global {
	var primsa: PrismaClient | undefined;
}

export const prisma = global.primsa || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
	global.prisma = prisma;
}

/// warn(primsa-client) there are already 10 instances of primsa client actively running ( the way to fix this is to add prisma clienta s a global)
