import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBook, FaRegCircleUser } from "react-icons/fa6";
import { RiLoginBoxFill } from "react-icons/ri";
import { SlLogin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
export default function AccountNavigation() {
 return (
   <div id="wd-account-navigation">
    <ListGroup>
    <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
              <img src="/images/node.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

     <ListGroupItem className="border-0 bg-black text-center">
      <Link href="Signin" className="text-white text-decoration-none">
      <RiLoginBoxFill className="fs-1 text-danger" /><br />SignIn</Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
      <Link href="Signup" className="text-white text-decoration-none">
      <SlLogin className="fs-1 text-danger" /><br />Signup </Link>
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center">
      <Link href="Profile" className="text-white text-decoration-none">
      <CgProfile className="fs-1 text-danger" /><br />Profile</Link>
      </ListGroupItem>
      </ListGroup>

   </div>
);}
