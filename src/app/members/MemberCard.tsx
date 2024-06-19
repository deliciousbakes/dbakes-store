import CalcAge from '@/lib/util'
import { Card, CardFooter, Image } from '@nextui-org/react'
import { Member } from '@prisma/client'
import Link from 'next/link'


type Props= {
    member:Member
}
const MemberCard = ({member}:Props) => {
  return (
    <Card
      as={Link}
      href={`/members/${member.userId}`}
      isPressable
    fullWidth
    
    >
      <Image
        alt={`${member.name}`}
        isZoomed
        src={member.image   || "/images/user.png"}
        width={300}
        className='aspect-square object-cover'
      />
      <CardFooter
        className='bg-dark-gradient absolute overflow-hidden justify-start bottom-0 z-10'>
        <div className="flex flex-col  text-white">
          <span className='font-semibold'>{member.name}, {CalcAge(member.dateOfBirth) }</span>
          <span className='text-sm'>{ member.city}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export default MemberCard
