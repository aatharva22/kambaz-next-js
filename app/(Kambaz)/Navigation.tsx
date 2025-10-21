"use client"
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { FaBook } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
export default function KambazNavigation() {
  let i = 1
  const pathname = usePathname()
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid }
  ]
  return (
    <div id="wd-kambaz-navigation">
      <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 110 }}
              id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
              <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      {/* <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/> */}
      
      

      {/* <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Account" id="wd-account-link" className= {`text-white text-decoration-none `} >
      <FaRegCircleUser className="fs-1 text-white" /><br />Account</Link>
      </ListGroupItem>

       <ListGroupItem className="border-0 bg-white text-center">
       <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <AiOutlineDashboard className="fs-1 text-danger" />
         <br />
         Dashboard
       </Link>
     </ListGroupItem> */}

      {/* <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/> */}

      {/* <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Courses/1234" id="wd-course-link" className="text-white text-decoration-none">
      <FaBook className="fs-1 text-danger" /><br />Courses</Link>
      </ListGroupItem> */}
      
      {/* <Link href="/Courses/1234" id="wd-course-link">Courses</Link><br/> */}

      {/* <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none">
      <FaCalendarAlt className="fs-1 text-danger" /><br />Calendar</Link>
      </ListGroupItem> */}
      

      {/* <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/> */}

      {/* <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
      <CiMail className="fs-1 text-danger" /><br />Inbox</Link>
      </ListGroupItem> */}

      {/* <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/> */}

      {/* <ListGroupItem className="border-0 bg-black text-center">
      <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
      <IoIosSettings className="fs-1 text-danger" /><br />Labs</Link>
      </ListGroupItem> */}

      {/* <Link href="/Labs" id="wd-labs-link">Labs</Link><br/> */}

      <ListGroupItem as={Link} href="/Account"
        className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem key={i++ } as={Link} href={link.path}
          className={`bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "bg-black text-white" }`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
          
        </ListGroupItem>
      ))}
      </ListGroup>
    </div>
);}

