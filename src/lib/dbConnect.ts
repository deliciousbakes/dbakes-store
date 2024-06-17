import { PrismaClient } from "@prisma/client"



const prismaClientSingleton = () => {
    return new PrismaClient()
}
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined
} 

const prismaDb = globalForPrisma.prisma ?? prismaClientSingleton()
export default prismaDb

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prismaDb

export const prismaConnect = prismaDb