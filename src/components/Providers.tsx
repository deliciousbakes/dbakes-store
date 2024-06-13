import { NextUIProvider } from "@nextui-org/react"

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
          <NextUIProvider>{children}</NextUIProvider>
    </div>
  )
}

export default Providers
