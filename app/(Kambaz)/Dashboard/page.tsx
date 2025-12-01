"use client"
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse,setCourses } from "../Courses/reducer";
import { unEnroll, enroll } from "./reducer";
import * as client from "../Courses/client";
import { RootState } from "../store";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
export default function Dashboard() {
  const dispatch = useDispatch()
  const {courses} = useSelector((state:RootState) => state.coursesReducer)
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false)
  if (!currentUser ) {
    redirect('/Account/Signin')
  }
  const [enrollment, setEnrollment] = useState({
    "_id": "23", "user": currentUser._id, "course": "" 
  }) 
    const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };
  const handleEnroll = async (courseId: string) => {
  const newEnrollment = await client.enrollCourse(currentUser._id, courseId);
  dispatch(enroll(newEnrollment));   // update redux UI
  await fetchCourses();
};

const handleUnEnroll = async (courseId: string) => {
  await client.unEnrollCourse(currentUser._id, courseId);

  dispatch(
    unEnroll({
      userId: currentUser._id,
      courseId: courseId,
    })
  );
  await fetchCourses();
};
    const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};


  
  const { enrollments } = useSelector((state:RootState) => state.enrollmentsReducer );
  //const [courses, setCourses] = useState(db.courses)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [course , setCourse] = useState<any> ( {
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    src: "/images/javascript.jpg", description: "New Description"
  });
    const fetchCourses = async () => {
    try {
      if(!showAllCourses) {
        console.log("My courses")
        const courses = await client.findMyCourses();
        dispatch(setCourses(courses));
      }
      else {
        console.log("All courses")
        const courses = await client.fetchAllCourses();
        dispatch(setCourses(courses));
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  return (
    <div id="wd-dashboard">
      <Row className="mb-3">
        <Col className="d-flex justify-content-start">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        </Col>
        <Col xs="auto" className="d-flex justify-content-end">
        <Button 
          variant="primary" 
          size="lg"
          onClick= {() => (setShowAllCourses(!showAllCourses))}
        >
          Enrollments
        </Button>
        </Col>
      </Row>
      
      
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick= {onAddNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={onUpdateCourse} id="wd-update-course-click">
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
          

           {/* Show only enrolled courses  */}
          { !showAllCourses &&(
          courses
        .map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                {/* <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" > */}
                      <CardImg src={course.src} variant="top" width="100%" height={160} />
                  
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                    <Button variant="primary"  onClick= {() => {
                      redirect(`/Courses/${course._id}/Home`)
                    }}
                    > Go </Button>

                    <div className="d-flex gap-0.5">
                    <Button onClick={(event) => {
              event.preventDefault();
              onDeleteCourse(course._id);
            }} className="btn btn-danger "
                    id="wd-delete-course-click">
                    Delete
                  </Button> 

                    <Button id="wd-edit-course-click"
                    onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                    }}
                    className="btn btn-warning " >
                    Edit
                    </Button>
                    
                    <Button 
                    variant="danger" 
                    className="btn  me-2 "
                  //   onClick={(event) => {
                  //     event.preventDefault();
                  // setEnrollment({ ...enrollment, course: course._id });

                  // dispatch(unEnroll({ 
                  // userId: currentUser._id, 
                  // courseId: course._id 
                  // }));
                  // }}
                  onClick={()=> handleUnEnroll(course._id)}
>
                    Unenroll
                  </Button>
                    </div>
                  </div>

                  </CardBody>
                {/* </Link> */}
              </Card>
            </Col>
          )) )}
          
          {/* Show All courses  */}
          { showAllCourses &&(
          courses
        .map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                {/* <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" > */}
                  <CardImg src={course.src} variant="top" width="100%" height={160} />
                  {/* </Link> */}
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                    <Button variant="primary"> Go </Button>

                    <div className="d-flex gap-0.5">
                    <Button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id))
                    }} className="btn btn-danger "
                    id="wd-delete-course-click">
                    Delete
                  </Button> 

                    <Button id="wd-edit-course-click"
                    onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                    }}
                    className="btn btn-warning " >
                    Edit
                    </Button>
                    { (enrollments.filter((e) => e.user === currentUser._id).find((e) => e.course === course._id)) ? 

                    // Show unenroll button if user is enrolled
                    <Button 
                    variant="danger" 
                    className="btn  me-2 "
                  //   onClick={(event) => {
                  //     event.preventDefault();
                  // setEnrollment({ ...enrollment, course: course._id });

                  // dispatch(unEnroll({ 
                  // userId: currentUser._id, 
                  // courseId: course._id 
                  // }));
                  // }}
                  onClick={()=> handleUnEnroll(course._id)}
>
                    Unenroll
                  </Button>
                  :
                  // Show enroll button if user is not enrolled
                    <Button 
                    variant="success" 
                    className="btn  me-2 "
                  //   onClick={(event) => {
                  //     event.preventDefault();
                  // setEnrollment({ ...enrollment, course: course._id });

                  // dispatch(enroll(enrollment));
                  // }}
                  onClick={()=> handleEnroll(course._id)}
>
                    Enroll
                  </Button>  
                      
                    }
                    
                    </div>
                  </div>

                  </CardBody>
                
              </Card>
            </Col>
          )) )}
          </Row>
        


        
    
        
          
         


      </div>
    </div>
);}

