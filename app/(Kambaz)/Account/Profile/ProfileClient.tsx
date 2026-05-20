"use client";
import * as client from "../client";
import { Button, FormControl } from "react-bootstrap";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";

export default function ProfileClient() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
    console.log("Profile updated to:", updatedProfile);
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl id="wd-username" className="mb-2"
            value={profile.username} placeholder="Username"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <FormControl id="wd-password" className="mb-2"
            value={profile.password} placeholder="Password"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <FormControl id="wd-firstname" className="mb-2"
            value={profile.firstName} placeholder="First Name"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <FormControl id="wd-lastname" className="mb-2"
            value={profile.lastName} placeholder="Last Name"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <FormControl id="wd-dob" className="mb-2" type="date"
            value={profile.dob} placeholder="Date of Birth"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          <FormControl id="wd-email" className="mb-2"
            value={profile.email} placeholder="Email"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select className="form-control mb-2" id="wd-role" value={profile.role ?? "USER"}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>{" "}
            <option value="STUDENT">Student</option>
          </select>
          <Button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </Button>
          <Button onClick={signout} className="w-100 mb-2 btn-danger" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
