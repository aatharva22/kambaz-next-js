import Link from "next/link";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormControl } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import GreenCheckmark from "../../Courses/[cid]/Modules/GreenCheckmark";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl id="wd-username"
             placeholder="username" defaultValue="Atharva10"
             className="mb-2"/>
      <FormControl id="wd-password"
             placeholder="password" type="password" defaultValue="AFFASDS"
             className="mb-2"/>
      <FormControl 
             
             className="mb-2" placeholder="First Name" defaultValue="Atharva" />
      <FormControl 
             
             className="mb-2" placeholder="Last Name" defaultValue="Sonawane" />

   
    <FormControl type="date" defaultValue={"2000-10-21"} className="mb-3"></FormControl>
             <FormControl 
             
             className="mb-2" type = "email" placeholder="someone@somewhere.com" defaultValue="atharva@dummymail.com" />
    <Dropdown className="float-start mb-2">
       <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
         STUDENT
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem id="wd-publish-all" >
           USER
         </DropdownItem>
         <DropdownItem id="wd-publish-all-modules-and-items">
           FACULTY
         </DropdownItem>
         <DropdownItem id="wd-publish-modules-only">
           ADMIN
         </DropdownItem>
         <DropdownItem id="wd-publish-modules-only">
           STUDENT
         </DropdownItem>
   
       </DropdownMenu>
     </Dropdown>

     <Link id="wd-signin-btn"
            href="Signin"
            className="btn btn-primary w-100 mb-2">
            Sign out </Link>
      
    </div>
);}

