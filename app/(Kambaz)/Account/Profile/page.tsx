import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="Atharva10" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="AFFASDS"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Atharva" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="S" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-10-21" type="date" id="wd-dob" /><br/>
      <input defaultValue="atharva@dummymail.com" type="email" id="wd-email" /><br/>
      <select defaultValue="STUDENT" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link href="Signin" > Sign out </Link>
    </div>
);}

