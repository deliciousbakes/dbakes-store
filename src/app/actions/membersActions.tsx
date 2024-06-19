import prismaDb from '@/lib/dbConnect'
import { Photo } from '@prisma/client'

export const getAllMembers =async () => {
    
    try {
            
        return prismaDb.member.findMany()
        
    } catch (error) {
        console.log(error)
        }
}

export const getMemberByUserId = async (userId: string) => {
    try {
        return prismaDb.member.findUnique({
            where:{userId}
        }) 
    } catch (error) {
        console.log(error)
        throw new Error("What an Error")
    }
}

export const getMemberPhotosByUserId = async (userId: string) => {
    try {
       const member= await  prismaDb.member.findUnique({
           where: { userId },
           select: {
               photos:true
           }
       }) 
        
        
        
        if (!member) return null
        //  this gives an array of photos
        return member.photos.map(p => p) as Photo[]
        
    } catch (error) {
        console.log(error)
    }
}