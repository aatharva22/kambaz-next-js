"use client"
import {usePathname} from "next/navigation"
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBook, FaRegCircleUser } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import next from "next";
export default function AccountNavigation() {
  const pathname = usePathname()
 return (
   // <div id="wd-account-navigation">
   //  <ListGroup>
   //  <ListGroupItem className="bg-black border-0 text-center" as="a"
   //            target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
   //            <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
   //    </ListGroupItem>

   //   <ListGroupItem className="border-0 bg-black text-center">
   //    <Link href="Signin" className="text-white text-decoration-none">
   //    <RiLoginBoxFill className="fs-1 text-danger" /><br />SignIn</Link>
   //    </ListGroupItem>

   //    <ListGroupItem className="border-0 bg-black text-center">
   //    <Link href="Signup" className="text-white text-decoration-none">
   //    <SlLogin className="fs-1 text-danger" /><br />Signup </Link>
   //    </ListGroupItem>

   //    <ListGroupItem className="border-0 bg-black text-center">
   //    <Link href="Profile" className="text-white text-decoration-none">
   //    <CgProfile className="fs-1 text-danger" /><br />Profile</Link>
   //    </ListGroupItem>
   //    </ListGroup>

   // </div>

   <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link href="Signin" id="wd-course-home-link" className = {` list-group-item border-0 ${pathname.endsWith("Signin") ? "active" : "text-danger "} ` } >SignIn</Link>

      <Link href="Signup"  id="wd-course-modules-link" className={`list-group-item  ${pathname.endsWith("Signup") ? "active":"text-danger"} border-0`}  >SignUp
        </Link>
      <Link href="Profile" id="wd-course-piazza-link" className={`list-group-item  ${pathname.endsWith("Profile") ? "active":"text-danger"} border-0`}>Profile</Link>
      </div>
);}
