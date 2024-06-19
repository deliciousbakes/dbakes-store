import { getMemberByUserId } from "@/app/actions/membersActions"
import { CardBody, CardHeader, Divider } from "@nextui-org/react"
import { notFound } from "next/navigation"




const MemberDetailedPage = async ({ params }: { params: { userId: string } }) => {
    const member = await getMemberByUserId(params.userId)
    if(!member)return notFound()
  return (
    <>
      <CardHeader   className="text-2xl font-semibold to-secondary-50">
         <div className="flex justify-center items-center">Profile</div>  
      </CardHeader>
      <Divider />
      <CardBody>
  {member.description}
      </CardBody>
    </>
  )
}

export default MemberDetailedPage
