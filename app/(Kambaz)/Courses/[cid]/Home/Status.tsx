import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { TbFileImport } from "react-icons/tb";
import { CiImport } from "react-icons/ci";
import { SiGoogleanalytics, SiHomepage } from "react-icons/si";
import { FaStream } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
       <div className="w-50 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
     </div>
     <br /><br />

      {/* Complete on your own */}
      <div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <CiImport className="me-2 fs-5" /> Import Existing Content</Button> </div>
        </div>

        <div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <TbFileImport  className="me-2 fs-5" /> Import Form Commons</Button> </div>
        </div>

        <div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <SiHomepage className="me-2 fs-5" /> Choose Home Page</Button> </div>
        </div>
        <div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <FaStream  className="me-2 fs-5" /> View course stream</Button> </div>
        </div>
        <div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <TfiAnnouncement className="me-2 fs-5" /> New announcement</Button> </div>
        </div>
        <div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <SiGoogleanalytics className="me-2 fs-5" /> New analytics</Button> </div>
        </div><div className="d-flex">
       <div className="w-100 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <IoIosNotifications className="me-2 fs-5" /> View Course Notifications</Button> </div>
        </div>

    </div> );}