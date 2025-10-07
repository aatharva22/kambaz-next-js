import { Badge, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import TopBarControl from "./TopBarControl";

export default function PageContent() {
    return(
        <div>
            <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <Row>
                <Col xxl={9}>
                <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS
                </Col>
                <Col>
                <Badge className="rounded-Pill justify-content-end text-dark" bg="light"  > 40% of total</Badge>
                </Col>
                <Col>
                <TopBarControl/>
                </Col>
            </Row></div>

          <ListGroup className="wd-lessons rounded-0">

            <ListGroupItem action href="/Courses/1234/Assignments/A1 - ENV + HTML" className="wd-lesson p-3 ps-1">
            <Row>
                <Col xxl={1} className="d-flex">
                <BsGripVertical className="me-2 fs-3 " />
                <LuNotebookPen className="me-2 fs-3"/>
                </Col>
                <Col xxl={8}>
                <span className="wd-title"> A1 - ENV + HTML
                <br />Multiple modules | Not available until May 6 at 12am| <br />
                Due May 13 at 11:59pm| 100 pts </span> 
                </Col>
                <Col>
                <LessonControlButtons />
                </Col>
           
          </Row>
          </ListGroupItem>

          <ListGroupItem action href="/Courses/1234/Assignments/234" className="wd-lesson p-3 ps-1">
            <Row>
                <Col xxl={1} className="d-flex">
                <BsGripVertical className="me-2 fs-3 " />
                <LuNotebookPen className="me-2 fs-3"/>
                </Col>
                <Col xxl={8}>
                <span className="wd-title"> A2 - CSS + BOOTSTRAP
                <br />Multiple modules | Not available until May 13 at 12am| <br />
                Due May 20 at 11:59pm| 100 pts</span> 
                </Col>
                <Col>
                <LessonControlButtons />
                </Col>
           
          </Row>
          </ListGroupItem>

          <ListGroupItem action href="/Courses/1234/Assignments/345" className="wd-lesson p-3 ps-1">
            <Row>
                <Col xxl={1} className="d-flex">
                <BsGripVertical className="me-2 fs-3 " />
                <LuNotebookPen className="me-2 fs-3"/>
                </Col>
                <Col xxl={8}>
                <span className="wd-title"> A3 - JAVASCRIPT + REACT
                <br />Multiple modules | Not available until May 20 at 12am| <br />
          Due May 27 at 11:59pm| 100 pts</span> 
                </Col>
                <Col>
                <LessonControlButtons />
                </Col>
           
          </Row>
          </ListGroupItem>

          <ListGroupItem action href="/Courses/1234/Assignments/456" className="wd-lesson p-3 ps-1">
            <Row>
                <Col xxl={1} className="d-flex">
                <BsGripVertical className="me-2 fs-3 " />
                <LuNotebookPen className="me-2 fs-3"/>
                </Col>
                <Col xxl={8}>
                <span className="wd-title"> A4 - NEXT + NODE
                <br />Multiple modules | Not available until May 28 at 12am| <br />
          Due June 5th at 11:59pm| 100 pts</span> 
                </Col>
                <Col>
                <LessonControlButtons />
                </Col>
           
          </Row>
          </ListGroupItem>

          <ListGroupItem action href="/Courses/1234/Assignments/567" className="wd-lesson p-3 ps-1">
            <Row>
                <Col xxl={1} className="d-flex">
                <BsGripVertical className="me-2 fs-3 " />
                <LuNotebookPen className="me-2 fs-3"/>
                </Col>
                <Col xxl={8}>
                <span className="wd-title"> A5 - REDUX
                <br />Multiple modules | Not available until June 6 at 12am| <br />
          Due June 13th at 11:59pm| 100 pts</span> 
                </Col>
                <Col>
                <LessonControlButtons />
                </Col>
           
          </Row>
          </ListGroupItem>
          
        
            
          </ListGroup>
        </ListGroupItem>
        </ListGroup>
        </div>
    )
}