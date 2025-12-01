"use client";
import React from "react";
import { usePathname } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Breadcrumb({ course }: { course: { title: any } | undefined; }): React.JSX.Element {
 const pathname = usePathname();
 return (
   <span>
     Course {course?.title} &gt; {pathname.split("/").pop()}
   </span>
);}
