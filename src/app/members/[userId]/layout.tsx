
// "use client"

import { getMemberByUserId } from "@/app/actions/membersActions"
import { Card } from "@nextui-org/react"
import { notFound } from "next/navigation"
import MemberSidebar from "../MemberSidebar"


const Userlayout = async ({children, params}:{children:React.ReactNode, params:{userId:string}}) => {
 
//     const member = await prismaDb.member.findUnique({
//        where:{id:params.userId}
    //    })
    const member = await getMemberByUserId(params.userId)

    if (!member) return notFound()
    
    return (
        <div className="grid grid-cols-12 gap-5 h-[80vh]">
            <div className="col-span-3 ">
                <MemberSidebar member={member} />
            </div>
      
            <div className="col-span-9 ">
                <Card className="w-full   mt-10 h-[80vh]">
             {children}       
</Card>
            </div>
      
    </div>
  )
}

export default Userlayout
