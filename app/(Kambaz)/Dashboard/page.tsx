"use client"
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse} from "../Courses/reducer";
import { RootState } from "../store";
import Link from "next/link";
import * as db from "../Database";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Dashboard() {
  const dispatch = useDispatch()
  const {courses} = useSelector((state:RootState) => state.coursesReducer)
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = db;
  //const [courses, setCourses] = useState(db.courses)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [course , setCourse] = useState<any> ( {
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    src: "/images/javascript.jpg", description: "New Description"
  });
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick= {() => dispatch(addNewCourse(course))} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={()=> dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
      </h5><hr />
      <br />
      <FormControl value={course.name} className="mb-2" onChange={(e)=> setCourse({...course, name: e.target.value})}/>
      <FormControl as= "textarea" value={course.description} rows={3} onChange={(e) => setCourse({...course, description: e.target.value})}/>
        <h5 className="text-primary">Add image file path to add custom image</h5>
        <FormControl value={course.src} className="mb-2" onChange={(e)=> setCourse({...course, src: e.target.value})}/>

      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        
          <Row xs={1} md={5} className="g-4">
          {/* <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="React" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col> */}

        
          {courses.filter((course) =>
      enrollments.some(
        (enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
         ))
        .map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={course.src} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                    <Button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id))
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                  </Button> 

                    <Button id="wd-edit-course-click"
                    onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                    }}
                    className="btn btn-warning me-2 float-end" >
                    Edit
                    </Button>

                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        


        
    
        
          
          {/* <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/2345" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/javascript.jpg" width="100%" height={160} alt="JavaScript" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2345 JavaScript </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer using JS as the language.
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/3456" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/html.jpg" width="100%" height={160} alt="HTML" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3456 HTML </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Learn the structure of the webpages.
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>

          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/5678" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/node3.jpg" width="100%" height={160} alt="NodeJS" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5678 NodeJS </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Welcome to the server side.
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>


          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/6789" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/next.jpg" width="100%" height={160} alt="NextJS" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS6789 NextJS </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Everything in a nutshell.
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>      

          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/7891" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/redux.jpg" width="100%" height={160} alt="Redux" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS7891 redux </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                After all this its important.
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col> 

          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
          <Card>
          <Link href="/Courses/8912" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/cloud.jpg" width="100%" height={160} alt="cloud" />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS8912 cloud </CardTitle>
              <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Learn cloud.
              </CardText>
              <Button variant="primary"> Go </Button>
            </CardBody>
          </Link>
          </Card>
        </Col>  */}
      </Row>

      

      
          {/* <div className="wd-dashboard-course">
          <Link href="/Courses/8912" className="wd-dashboard-course-link">
            <Image src="/images/cloud.jpg" width={200} height={150} alt="cloud" />
            <div>
              <h5> CS8912 cloud </h5>
              <p className="wd-dashboard-course-title">
                Learn cloud.
              </p>
              <button> Go </button>
              <br />
            </div>
          </Link> 
          </div> */}


      </div>
    </div>
);}
