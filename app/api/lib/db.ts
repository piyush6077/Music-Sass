import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient()
// create Schema , migrate your db , create your client 