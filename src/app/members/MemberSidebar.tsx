"use client"


import CalcAge from "@/lib/util"
import { Button, Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react"
import { Member } from "@prisma/client"
import { default as Link, default as link } from "next/link"
import { usePathname } from "next/navigation"

  




type Props = {
      member:Member
  }
const MemberSidebar = ({ member }: Props) => {
    const pathname= usePathname()
     const basePath =`/members/${member.userId}`
    const navLinks = [
         {name:"Profile", href:`${basePath}`},
         { name:"Photos", href:`${basePath}/photos`},
         { name:"Chat", href:`${basePath}/chat`},
  ]
   return (
     <Card   className="w-full mt-10 h-[80vh] items-center">
        <Image
        alt="profile main image"
        isZoomed
        src={member.image   || "/images/user.png"}
        width={200}
        height={200}
        className='aspect-square rounded-full mt-6 object-cover'
           />
           <CardBody>
               <div className="flex flex-col items-center">
                   <div className="text-2xl ">
                    { member.name}, {CalcAge(member.dateOfBirth)}
                   </div>
                   <div className="text-sm text-neutral-500">
                       {member.city}, {member.country}
                   </div>
               </div>
               <Divider className="my-3" />
               <nav    className="flex flex-col p-4  ml-4 gap-4 text-2xl">
                   {navLinks.map((link) => (
                       <Link  
                        href={link.href}  
                           key={link.name}
                           className={`block rounded 
                             ${pathname === link.href ? 'text-secondary-200':'hover:text-secondary-50'}`}
                       >
                       {link.name}
                       </Link>
                   ))}
               </nav>
           </CardBody>
           <CardFooter   >
               <Button
                   as={link}
                   href="/members"
                   fullWidth
                   color="secondary"
                   variant="bordered"
               >
                   Go Back
                   
               </Button>
           </CardFooter>
     </Card>
   )
 }
 
 export default MemberSidebar
 