import { Spinner } from "@nextui-org/react"

const LoadingPage = () => {
  return (
    <div    className="flex flex-col justify-center items-center vertical-center">
        <Spinner  label="Loading..." color="secondary"    labelColor="secondary" />
    </div>
  )
}

export default LoadingPage
