"use client"
import {usePathname} from "next/navigation"
import Link from "next/link";
import { ListGroup, ListGroupItem, Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";
export default function AccountNavigation() {
  const pathname = usePathname()
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const links = currentUser && currentUser._id ? ["Profile"] : ["Signin", "Signup"];
 return (
  

   <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

      <Nav variant="pills">
     {links.map((link) => (
       <NavItem key={link}>
         <NavLink as={Link} href={link} active={pathname.endsWith(link)}>
           {link} </NavLink> </NavItem>
     ))}
   </Nav>
      </div>
);}
