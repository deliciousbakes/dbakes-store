
"use server"
import { auth } from '@/auth'
import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import Link from 'next/link'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'
import UserMenu from './UserMenu'

const Topnav =async () => {
const session = await auth()
  
  const navILinktems = [
    {href:'/members',label:"Members"},
    {href:'/lists',label:"Lists"},
    {href:'/contacts',label:"Contacts"},
    {href:'/preferences',label:"Preferences"},
  ]
  return (
     <Navbar  maxWidth='xl' className='bg-jade' classNames={{
      item: [
      "text-xl",
      "text-white ",
      "uppercase",
      "data-[active]:text-yellow-700",
    //   "data-[active]:text-yellow-700",
    ]}}  isBordered>
          <NavbarBrand as={Link}  href={"/"}>
               <GiMatchTip size={40} href="/" className="text-melon" />
          <p className="font-bold text-xl text-melon  flex">DELICIOUS BAKES</p>
          </NavbarBrand>
          
      <NavbarContent   className='text-melon justify-start'>

        {navILinktems?.map((item) => (
          <NavLink href={item.href} label={item?.label} key={item.href} />
        ))}
      </NavbarContent>
       <NavbarContent justify="end">
        {session?.user ? (
          <UserMenu user={session.user } />
        ) : (
            <>
              <Button 
              as={Link} 
              color="primary"
               href="/register" 
              variant="bordered" 
              className="text-melon font-bold" >
            Register
          </Button>
      
          <Button 
          as={Link} 
          color="primary" 
          href="/login" 
          variant="bordered" 
          className="text-melon font-bold" >
            Log In
          </Button>
            </>
             )}   
          
        
          </NavbarContent>
    </Navbar>
  )
}

export default Topnav
