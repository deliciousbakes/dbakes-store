import { getAllMembers } from "../actions/membersActions"
import MemberCard from "./MemberCard"

const MembersPage = async () => {

const allMembers= await getAllMembers()

  return (
    <div
      className="grid mt-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
      {allMembers && allMembers?.map(member=>(
        <MemberCard   member={member} key={member.id} />
        
      ))}
    </div>
  )
}

export default MembersPage
