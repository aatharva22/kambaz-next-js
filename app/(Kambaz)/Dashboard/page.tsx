import Link from "next/link";
import * as db from "../Database";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        
          <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
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
        </Col>

        
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        


        
    
        
          
          <Col className="wd-dashboard-course " style={{ width: "300px" }}>
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
        </Col> 
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
