"use client"

import { registerUser } from "@/app/actions/authActions"
import ButtonComponent from "@/components/ButtonComponent"
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody, CardHeader, Input } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { GiPadlock } from "react-icons/gi"

const RegisterForm = () => {
    const { register, handleSubmit,setError, formState: { isValid, errors, isSubmitting } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode:"onTouched"
        
    })
    
    const onSubmit = async (data: any) => {
        
        const result = await registerUser(data)


        if (result.status === "success") {
            
            console.log("user registered successfully")
        // toast.success("user registered successfully");

        } else {
            if (Array.isArray(result.error)) {
                result.error.forEach((e) => {
                    const fieldName = e.path.join(".") as "email" | "name" |"password"
                    setError(fieldName, { message: e.message })
            //  toast.error(e.message as string);
                    
                })
            } else {
                setError("root.serverError", { message: result.error })
            //  toast.error(result.error as string);
                
            }
        }
        
    }
  return (
      <Card className="mx-auto w-2/5">
          <CardHeader   className="flex flex-col justify-center items-center bg-jade">
              <div className="flex flex-col gap-2 items-center text-secondary-50">
                  <div className="flex flex-row items-center gap-3">
                  <GiPadlock size={50} />
                  <h1 className="text-2xl fontbold">Singup</h1>
                  </div>
                  <p className="text-sm">Sign Up to Pushfire</p>
                  </div>
          </CardHeader>
          <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-4">
                      <Input
                          defaultValue=""
                          label="Email"
                          variant="bordered"
                          {...register('email')}
                          isInvalid={!!errors.email}
                          errorMessage={errors.email?.message }

                      />
                      <Input
                          defaultValue=""
                          label="Name"
                          variant="bordered"
                          {...register('name')}
                          isInvalid={!!errors.name}
                          errorMessage={errors.name?.message }

                      />
                      <Input
                          defaultValue=""
                          label="Image"
                          variant="bordered"
                          {...register('image')}
                          isInvalid={!!errors.image}
                          errorMessage={errors.image?.message }

                      />
                      <Input
                          defaultValue=""
                          label="Password"
                          type="password"
                          variant="bordered"
                          {...register('password')}
                          isInvalid={!!errors.password}
                          errorMessage={errors.password?.message }
                      />
                      
                      {errors.root?.serverError && (
                          <p className="text-danger text-sm">
                              {errors.root?.serverError.message}
                          </p>
)}

                      <ButtonComponent
                      isLoading={isSubmitting} 
                      isDisabled={!isValid} 
                      label="Register"
                      />

                  </div>
              </form>
          </CardBody>
          
   </Card>
  )
}

export default RegisterForm
