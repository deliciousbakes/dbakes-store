

"use client"
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";
export default function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  const navILinktems = [
    {href:'/members',label:"Members"},
    {href:'/lists',label:"Lists"},
    {href:'/contacts',label:"Contacts"},
    {href:'/preferences',label:"Preferences"},
  ]
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="bg-jade flex-auto" classNames={{
      item: [
      "text-xl",
      "text-white ",
      "uppercase",
      "data-[active]:text-yellow-700",
    ]}}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={Link}  href={"/"}>
                  <GiMatchTip size={40} href="/" className="text-melon" />
          <p className="font-bold text-xl text-melon  flex">DELICIOUS BAKES</p>
        </NavbarBrand>
      </NavbarContent  >

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
       
        {navILinktems?.map((item) => (
          <NavLink href={item.href} label={item?.label} key={item.href} />
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
                
          <Button as={Link} color="primary" href="/register" variant="bordered" className="text-melon font-bold" >
            Sign Up
          </Button>
      
          <Button as={Link} color="primary" href="/login" variant="bordered" className="text-melon font-bold" >
            Sign In
          </Button>
        
          </NavbarContent>
          
      <NavbarMenu >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
