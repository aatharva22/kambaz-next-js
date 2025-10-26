import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
export default function Labs () {
    return(
        <div >
           <Nav variant="pills">
                <NavItem className="d-flex flex-row gap-3 justify-content-center" >
                    <NavLink href="\Labs" as={Link} >
                        Home
                    </NavLink>
                    <NavLink href="\Labs" as={Link} >
                        About Us
                    </NavLink><NavLink href="\Labs" as={Link} >
                        Contact Us
                    </NavLink><NavLink href="\Labs" as={Link} >
                        FAQs
                    </NavLink>
                </NavItem>
           </Nav>
           <br /><hr />
        </div>
    )
}