"use client"

import { signInUser } from "@/app/actions/authActions"
import ButtonComponent from "@/components/ButtonComponent"
import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardBody, CardHeader, Input } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { GiPadlock } from "react-icons/gi"

const LoginForm = () => {

    const router = useRouter()
    const { register, handleSubmit, formState: { isValid, errors,isSubmitting } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode:"onTouched"
        
    })
    
    const onSubmit =async (data: LoginSchema)=>{
        console.log(data)
        const result = await signInUser(data)
        if (result.status === "success") {
            router.push("/members")
            router.refresh()
            console.log(result.status)
        // toast.success("Log in successful");
        } else {
            //  toast.error(result.error as string);
        }
    }

  return (
      <Card className="mx-auto w-2/5">
          <CardHeader   className="flex flex-col justify-center items-center bg-jade">
              <div className="flex flex-col gap-2 items-center text-secondary-50">
                  <div className="flex flex-row items-center gap-3">
                  <GiPadlock size={50} />
                  <h1 className="text-2xl fontbold">Signin</h1>
                  </div>
                  <p className="text-sm">Login to Pushfire</p>
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
                          label="Password"
                          type="password"
                          variant="bordered"
                          {...register('password')}
                          isInvalid={!!errors.password}
                          errorMessage={errors.password?.message }


                      />
                      
                      
                     
                      <ButtonComponent
                      isLoading={isSubmitting} 
                      isDisabled={!isValid} 
                      label="Login"
                      />

                  </div>
              </form>
          </CardBody>
          
   </Card>
  )
}

export default LoginForm
