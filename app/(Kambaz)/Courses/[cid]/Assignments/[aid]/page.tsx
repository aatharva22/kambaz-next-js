"use client"
import { Form, Row, FormLabel, FormControl, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Card, CardBody, CardTitle, FormCheck, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../../Database"
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment } from "../reducer";
import { useRouter } from "next/navigation";


export default function AssignmentEditor() { 
  
  const {aid, cid} = useParams()
  const router = useRouter()
  const assignments = db.assignments
  const [assignment, setAssignment] = useState({
    "_id": `${aid}`,
    "title": "",
    "course": `${cid}`,
    "until": "",
    "due": "",
    "untildt": "",
    "duedt": "",
    "points": 100,
    description: ""
  })
  const dispatch = useDispatch()

  console.log(assignments.find((assig) => (assig._id === aid))?.due)

  
  
  return (
    <div id="wd-assignments-editor">

      <Form>
          <Row className="mb-1" >
         <FormLabel column> Assignment Name </FormLabel>
      </Row>
      <Row className="mb-3"> 
        <Col><FormControl type="text" defaultValue={assignments.find((assign) => aid === assign._id)?.title}
        onChange={(e) => setAssignment({...assignment, title:e.target.value})}
         /> 
         
  
           </Col>
        
      </Row>

      <Row className="mb-3 ">
        <Col>
        <FormControl type="textarea" defaultValue={"The assignment is available online Submit a link to the landing page of every sumbisson is essential."} style={{ height: "250px" }}
        onChange={(e) => setAssignment({...assignment, description :e.target.value})}
        ></FormControl>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xxl={2}></Col>
        <Col xxl={2} className="d-flex gap-5"> <FormLabel> Points</FormLabel></Col>
       <Col xxl={8}><FormControl type="number" defaultValue={100} 
       onChange={(e) => setAssignment({...assignment, points:Number(e.target.value)})}
       ></FormControl></Col>

      </Row>

      <Row className="mb-3">
        <Col xxl={2}></Col>
        <Col xxl={2} className="d-flex gap-5"> <FormLabel> Assignment Group</FormLabel></Col>
        <Col xxl={8}>
        <Dropdown className=" me-2">
       <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          Assignments
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem >
            Groups
         </DropdownItem>
         <DropdownItem >
           Projects
         </DropdownItem>
         <DropdownItem >
           Quizzes
         </DropdownItem>

       </DropdownMenu>
     </Dropdown>

       </Col>

      </Row>

      <Row className="mb-3">
        <Col xxl={2}></Col>
        <Col xxl={2} className="d-flex gap-5"> <FormLabel> Display Grade As</FormLabel></Col>
        <Col xxl={8}>
        <Dropdown className=" me-2">
       <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          Percentage
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem >
            Marks
         </DropdownItem>
         <DropdownItem >
           Pointer
         </DropdownItem>
         <DropdownItem >
           Average
         </DropdownItem>

       </DropdownMenu>
     </Dropdown>

       </Col>

      </Row>

      <Row className="mb-3" >
        <Col xxl={2}></Col>
        <Col xxl={2} className="d-flex gap-5"> <FormLabel> Submission Type</FormLabel></Col>
        <Col xxl={8}>
        <Card style={{ height: "18rem" }}>
          <CardBody>
        <Dropdown className=" me-3 mb-3 ">
       <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          Online
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem >
            Offline
         </DropdownItem>
         <DropdownItem >
           GitHub
         </DropdownItem>
         

       </DropdownMenu>
     </Dropdown>

     <CardTitle > Online Entry Options</CardTitle>
     <FormCheck type="checkbox" label="Text Entry" name="formHorizontalRadios" defaultChecked />
               <FormCheck type="checkbox" label="Website URL" name="formHorizontalRadios" />
               <FormCheck type="checkbox" label="Media Recordings" name="formHorizontalRadios" />
               <FormCheck type="checkbox" label="Student Annotation" name="formHorizontalRadios" />
               <FormCheck type="checkbox" label="File Uploads" name="formHorizontalRadios" />


     </CardBody>
    </Card>
       </Col>

      </Row>

      <Row className="mb-3" >
        <Col xxl={2}></Col>
        <Col xxl={2} className="d-flex gap-5"> <FormLabel> Assign</FormLabel></Col>
        <Col xxl={8}>
        <Card style={{ height: "18rem" }}>
          <CardBody>
        

     <CardTitle > Assign To</CardTitle>
     <Dropdown className=" me-3 mb-3 ">
       <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
          Everyone
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem >
            TA
         </DropdownItem>
         <DropdownItem >
           Faculty
         </DropdownItem>
         

       </DropdownMenu>
     </Dropdown>

     <CardTitle > Due</CardTitle>
     <FormControl  className="mb-2 font-black" type="datetime-local" defaultValue={assignments.find((assign) => aid === assign._id)?.untildt}>
  
     </FormControl>

    <Row >
     <Col>
     <CardTitle > Available From</CardTitle>
     <FormControl type="datetime-local" defaultValue={assignments.find((assign) => aid === assign._id)?.untildt}
      onChange={(e) => setAssignment({...assignment, untildt:e.target.value})}
      ></FormControl>

     </Col>
     <Col>
     <CardTitle > Available To</CardTitle>
     <FormControl type="datetime-local" defaultValue={assignments.find((assign) => aid === assign._id)?.duedt}
      onChange={(e) => setAssignment({...assignment, duedt:e.target.value})}
      ></FormControl>

     </Col>
     </Row>


     </CardBody>
    </Card>
       </Col>

      </Row>
                
                <hr />
                <Row>
                  <Col xxl={9}></Col>
                  <div className="text-nowrap float-end">
                    
                  <Button variant="secondary" size="lg" className="me-1 float-end"
                  onClick={() => { dispatch(addAssignment(assignment))
                                  router.push(`/Courses/${cid}/Assignments`)      
                  }}
                  > Save
                       </Button>

                       <Button variant="danger" size="lg" className="me-1 float-end"
                       onClick={()=> {
                        setAssignment({
                           "_id": `${aid}`,
                           "title": "",
                           "course": `${cid}`,
                           "until": "",
                           "due": "",
                           "untildt": "",
                           "duedt": "",
                           "points": 100,
                           description: ""
                         })
                         router.push(`/Courses/${cid}/Assignments`) 

                       }}> Cancel
                       </Button>
                       </div>
                       </Row>
                

            </Form>

    </div>
);}
