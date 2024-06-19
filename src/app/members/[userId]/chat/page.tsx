import { CardBody, CardHeader, Divider } from "@nextui-org/react"

const ChatsPage = () => {
  return (
    <>
      <CardHeader   className="text-2xl font-semibold to-secondary-50">
         <div className="flex justify-center items-center">Chats</div>  
      </CardHeader>
      <Divider />
      <CardBody>
 Chats  go here
      </CardBody>
      
    </>
  )
}

export default ChatsPage
