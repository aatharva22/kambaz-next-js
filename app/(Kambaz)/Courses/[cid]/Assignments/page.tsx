"use client"
import { useParams } from "next/navigation";
import ButtonControl from "./ButtonControl";
import PageContent from "./PageContent";

export default function Assignments() {
  return (
    <div id="wd-assignments" >
     <ButtonControl/>
     <br /><br />
     <PageContent/>
      
    </div>
);}
