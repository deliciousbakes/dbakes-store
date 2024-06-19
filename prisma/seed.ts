import { PrismaClient } from '@prisma/client';
import { hash } from "bcryptjs";
import { membersData } from "./membersData";

const prisma = new PrismaClient()

const seedMember =async () => {
    return membersData.map(async (member) => prisma.user.create({
        data: {
            email: member.email,
            emailVerified: new Date(),
            name: member.name,
            password: await hash("passwordkouatch", 10),
            image: member.image,
            Member: {
                create: {
                    dateOfBirth: new Date(member.dateOfBirth),
                    gender: member.gender,
                    name: member.name,
                    createdAt:new Date(member.created),
                    updatedAt:new Date(member.lastActive),
                    description: member.description,
                    city: member.city,
                    country: member.country,
                    image: member.image,
                    photos: {
                        create: {
                            url: member.image,
                            
                        }
                    }
                }
            }

                
            
    }
    }))
}

const main = async () => {
    await seedMember()
}

main().catch(e => {
    console.error(e)
    process.exit(1)

}).finally(async () => {
    await prisma.$disconnect()
})