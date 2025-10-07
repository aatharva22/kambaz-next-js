import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
  return (
    

    <div id="wd-signin-screen">
      <h1>Sign up</h1>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2" defaultValue="Atharva10"/>
      <FormControl id="wd-password" placeholder="password" type="password" defaultValue = "QAFEFFF"
             className="mb-2"/> 
      <FormControl id="wd-password"
             placeholder="Verify-password" type="password" defaultValue = "QAFEFFF"
             className="mb-2"/> 
      <Link 
            href="/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign up </Link>
      <Link id="wd-signup-link" href="Signin">Sign in</Link>
    </div>
);}
