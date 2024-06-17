import * as z from "zod"



export const loginSchema = z.object({
    email: z.string().email(),
    password:z.string().min(5,{message:'Password must be at least 5 characters'})
})
export type LoginSchema=z.infer<typeof loginSchema>