"use server"

import { signIn, signOut } from "@/auth";
import prismaDb from "@/lib/dbConnect";
import { LoginSchema } from "@/lib/schemas/loginSchema";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";





export const signInUser =async (data:LoginSchema):Promise<ActionResult<string>> => {
    try {
        const loginResult = await signIn('credentials', {
            email: data.email,
            password: data.password,
            
            redirect:false
        }) 
        console.log({loginResult})

        return { status: "success", data: "Logged In" };

    } catch (error) {
        console.log(error)
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { status: "error", error: "Invalid credentials"};
                case "CallbackRouteError":
                    return { status: "error", error:" Callback route error"};
                default:
                    return { status: "error", error: "Some other error"};
                    }
                    } else {
            return { status: "error",  error: "Something else went wrong"};
                };
                        
            }
        }
                        // switch (error.type) {
                        //     case "CredentialsSignin":
                        //         return { status: "error", error: `${error.message}- ${error.name}-${error.cause}` };
                        //     case "CallbackRouteError":
                        //         return { status: "error", error:`${error.message}- ${error.name}-${error.cause}` };
                        //     default:
                        //         return { status: "error", error: `${error.message}- ${error.name}-${error.cause}` };
                        //         }
   
export const registerUser = async (data: RegisterSchema):Promise<ActionResult<User>> => {
    try {
        
    const validated = registerSchema.safeParse(data)
    if (!validated.success) {
        return {status: "error", error:validated.error.errors}
    }

    const { name, email, password,image } = validated.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await prismaDb.user.findUnique({
        where:{email}
    })

    if (existingUser) {
        return {status: "error", error: "User already exists" }
    }
    
    const  user= await  prismaDb.user.create({
        data: {
            name,
            email,
            image,
            password:hashedPassword
        }
    })
return {status:"success", data:user}
    } catch (error) {
        console.log(error)
        return {status:"error", error:"Something went wrong, Create user Error"}
    }

}

export const getUserByEmail = async (email:string) => {

    return prismaDb.user.findUnique({where:{email}})
}

export const getUserById = async (id:string) => {

    return prismaDb.user.findUnique({where:{id  }})
}

export const signOutUser = async () => {
await signOut({redirectTo:"/"})
}