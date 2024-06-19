import * as z from "zod"



export const registerSchema = z.object({
    email: z.string().email(),
    image: z.string(),
    name: z.string().min(3, { message: "at least 3 characters needed" }),
    password:z.string().min(5,{message:'Password must be at least 5 characters'}),
})
export type RegisterSchema=z.infer<typeof registerSchema>