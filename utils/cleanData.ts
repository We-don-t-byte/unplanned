import { Company, Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
        await prisma.user.deleteMany({});
        await prisma.company.deleteMany({});
        await prisma.category.deleteMany({});
        console.log("done")
}

main();