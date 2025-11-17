"use client"

import { Badge, Col, ListGroup, ListGroupItem, Row, Modal, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegTrashAlt } from "react-icons/fa";

import { LuNotebookPen } from "react-icons/lu";

import TopBarControl from "./TopBarControl";

import { redirect, useParams } from "next/navigation";
import { FaPencilAlt } from "react-icons/fa";
import { RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, editAssignment } from "./reducer";
import { useState } from "react";



let i = 1

export default function PageContent() {
  const [show,setShow] = useState(false)
  const [assigId, setAssigId] = useState("");
  function formatDueDate(dt: string) {
  const date = new Date(dt);
  

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // Convert to 12-hour format

  return `${month} ${day} at ${hours}:${minutes}${ampm}`;
}


    const {currentUser} = useSelector((state:RootState) => state.accountReducer) 
    const {assignments} = useSelector((state:RootState) => state.assignmentsReducer)
    
    const {cid, aid} = useParams()

    const dispatch = useDispatch()
    if (!currentUser) return redirect("/Account/Signin")
      
    return(
        <div>
          <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          This assignment will be deleted!
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false)
           setAssigId("0")
          }
          }>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch(deleteAssignment(assigId))
            setShow(false)}}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      
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

            {assignments.filter((assig) => assig.course === cid).map((assig) => <ListGroupItem action key={i++}  className="wd-lesson p-3 ps-1">
            <Row>
                <Col xxl={1} className="d-flex">
                <BsGripVertical className="me-2 fs-3 " />
                {/* Pencil Icon Only visible to faculty, which is used to edit */}
                <LuNotebookPen className="me-2 fs-3"/>
                 { currentUser.role === "FACULTY" && <FaPencilAlt className="me-2 fs-3" onClick={
                  () => {
                    if(currentUser?.role === "FACULTY") {
                        dispatch(editAssignment(assig))
                        redirect(`/Courses/${cid}/Assignments/${assig._id}`)
                    }
                  }
                 } />}
                </Col>
                <Col xxl={8}>
                <span className="wd-title"> {assig.title}
                <br />Multiple modules | Not available until {formatDueDate(assig.untildt)}|<br />
                Due May {formatDueDate(assig.duedt)} | 100 pts </span> 
                </Col>
                <Col>
                { (currentUser?.role === "FACULTY") && (<FaRegTrashAlt className="me-2 fs-3" 
                // onClick={ () => dispatch(deleteAssignment(assig._id))}
                onClick={() => {
                  setAssigId(assig._id)
                  setShow(true)
                
                }
                }
                />) }
                <LessonControlButtons />
                </Col>
           
          </Row>
          </ListGroupItem>

            ) }

            {/* <ListGroupItem action href="/Courses/1234/Assignments/A1 - ENV + HTML" className="wd-lesson p-3 ps-1">
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
          </ListGroupItem> */}
          
        
            
          </ListGroup>
        </ListGroupItem>
        </ListGroup>
        </div>
    )
}