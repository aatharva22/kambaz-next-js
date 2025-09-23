import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" defaultValue="Atharva10" /><br/>
      <input placeholder="password" type="password" className="wd-password" defaultValue="QAFEFFF" /><br/>
      <input placeholder="verify password " defaultValue="QAFEFFF"
             type="password" className="wd-password-verify" /><br/>
      <Link  href="Profile" > Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}
