import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: PrismaClient }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
