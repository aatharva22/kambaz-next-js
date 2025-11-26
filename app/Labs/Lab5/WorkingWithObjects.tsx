"use client"
import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "1", name: "NodeJS Module",
    description: "Learn NodeJS and ExpressJS",
    course: "Backend Development",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Assignment Title
      </a><hr/>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module name
      </a><hr/>

      <h4>Modifying Properties</h4>
      <div className="d-flex flex-row align-items-center">
        <a id="wd-update-assignment-title"
         className="btn btn-primary "
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <hr />

      </div>
      

    <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module name
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })} />
      <hr />
      
      <div className="w-75 d-flex align-items-center" id="wd-assignment-completed">
        
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label className="ms-2">Completed</label>
        <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed status
      </a>
      </div>
      <hr />

      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        value={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })} />
      <hr />

      

      
    </div>
);}
