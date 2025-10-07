import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";


export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      {/* <button>Collapse All</button>
      <button>View Progress</button>
      <select  defaultValue={"PUBLISH ALL"}>
              <option value="PUBLISH ALL">PUBLISH ALL</option>
              <option value="PUBLISH LATER">PUBLISH LATER</option>
              <option value="PUBLISHED">PUBLISHED</option>

            </select>
      <button>+Module</button> */}
      <ModulesControls /><br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Week 1 <ModuleControlButtons/></div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES <LessonControlButtons /></span> </ListGroupItem>
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />Introduction to the course <LessonControlButtons /></ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Learn what is Web Development</ListGroupItem>
              </ListGroup>

              <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">READING</span> </ListGroupItem>
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1">Full stack developer-chapter 1 : Introduction</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Full stack developer-chapter 2 : Creating User</ListGroupItem>
              </ListGroup>

              <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">SLIDES</span> </ListGroupItem>
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1">Introduction to web development</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Creating a HTTP server with node js</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Creating a React Application</ListGroupItem>
              </ListGroup>
            
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 1 Lecture 2</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">LEARNING OBJECTIVES</span> </ListGroupItem>
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1">Learn how to create user interface with HTML</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Deploy the assignment to netlify</ListGroupItem>
              </ListGroup>

              <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">SLIDES</span> </ListGroupItem>
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1">Intro to HTML and DOM</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Formatting web content with heading</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Formatting content with lists and labels</ListGroupItem>
              </ListGroup>
            
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 2 Lecture 1</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">LEARNING OBJECTIVES</span> </ListGroupItem>
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1">Adding styles</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Learning flex, position and box structure.</ListGroupItem>
              </ListGroup>

              <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">READING</span> </ListGroupItem>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item p-3 ps-1">CSS most used-chapter 1 : Introduction</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">CSS essentials-chapter 2 : Creating complex layouts</ListGroupItem>
              </ListGroup>

              <ListGroupItem className="wd-lesson p-3 ps-1">
              <span className="wd-title">SLIDES</span> </ListGroupItem>
              <ListGroup className="wd-content">
                <ListGroupItem className="wd-content-item p-3 ps-1">introduction to styling</ListGroupItem>
                <ListGroupItem className="wd-content-item p-3 ps-1">Styling first webpage</ListGroupItem>

              </ListGroup>
            
          </ListGroup>
        </ListGroupItem>
        


      </ListGroup>
    </div>
);}
