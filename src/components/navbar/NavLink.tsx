"use client"

import { NavbarItem } from "@nextui-org/react"
import Link from "next/link"
import { usePathname } from "next/navigation"



type NavLinkProps= {
    label: string,
    href:string,

}
const NavLink = ({ label, href }: NavLinkProps) => {
  const pathName = usePathname()
  return (
    <NavbarItem isActive={pathName===href} as={Link} href={href} aria-current="page">
           {label}
        </NavbarItem>
  )
}

export default NavLink
