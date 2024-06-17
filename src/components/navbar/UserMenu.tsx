"use client"

import { signOutUser } from '@/app/actions/authActions'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger
} from '@nextui-org/react'
import { Session } from 'next-auth'
import Link from 'next/link'


type props= {
  user:Session["user"]
}
const UserMenu = ({ user }: props) => {
  
  return (
    <Dropdown placement='bottom-end'>
      <DropdownTrigger >
        <Avatar 
        size="lg"  
        src={user?.image || "/images/f4.JPEG"}  
        isBordered 
          as="button"
        className='transition-transform' 
        color='primary' 
        name={ user?.name || "user avatar"} />
      </DropdownTrigger>
      <DropdownMenu  variant='flat' aria-label="user actions menu">
        <DropdownSection   showDivider>
          <DropdownItem   
          as="span" 
          isReadOnly 
          aria-label='username' 
          className='h-14 flex flex-row '>
         <p  className='font-semibold text-xl'>signed in as: {user?.name}</p> 
          </DropdownItem>
        </DropdownSection>
        <DropdownItem  as={Link} href="/members/edit">
   Edit profile
        </DropdownItem>
        <DropdownItem color='danger'   onClick={async () => signOutUser()}   >
         <div  className='justify-center items-center text-melon' >Log out</div>
          
        </DropdownItem> 
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserMenu
