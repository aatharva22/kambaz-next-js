/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import * as client from "../../client";
import { useState,useEffect } from "react";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import { setModules, editModule, updateModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";


export default function Modules() {
    const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
    console.log("CLIENT API:", client);
  };
  useEffect(() => {
    fetchModules();
  }, []);
  

  
  const {cid} = useParams()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  const [moduleName, setModuleName] = useState("");
     const dispatch = useDispatch();
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module1 = await client.createModuleForCourse(String(cid), newModule);
    dispatch(setModules([...modules, module1]));
  };
    const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(String(cid),moduleId);
    console.log("Deleting module:", moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
    const onUpdateModule = async (module: any) => {
    await client.updateModule(String(cid),module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };


  console.log("modules:", modules);

  return (

    
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} 
      addModule={onCreateModuleForCourse} 
      
      /><br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
      


      {modules.map((module) => 
        <ListGroupItem  key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
          
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {!(module as any).editing && module.name} 
              { (module as any).editing && (
              <FormControl className="w-50 d-inline-block"
               onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                    onUpdateModule({ ...module, editing: false });
               }}}
               defaultValue={module.name}/>
                )}
              
              
              <ModuleControlButtons editModule={(moduleId) => dispatch(editModule(moduleId))} moduleId={module._id} deleteModule={(moduleId) => onRemoveModule(moduleId)} /> </div>
              
              {module.lessons && (<ListGroup className="wd-lessons rounded-0">

                
                {module.lessons.map((lesson:any) => <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
              <span className="wd-title"> <BsGripVertical className="me-2 fs-3" />{lesson.name} <LessonControlButtons /></span> 
              <ListGroup className="wd-content-modules">
                <ListGroupItem className="wd-content-item p-3 ps-1">{lesson.description}</ListGroupItem>
                
              </ListGroup>
              </ListGroupItem>
              
            
            )}


              </ListGroup>)}
        </ListGroupItem>
        

      ) }
       
      </ListGroup>

    </div>
);}
