import { NextUIProvider } from "@nextui-org/react"

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
          <NextUIProvider>
            {/* <ToastContainer  position="bottom-right" className="z-50"/> */}
            {children}


          </NextUIProvider>
    </div>
  )
}

export default Providers
