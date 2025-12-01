"use client";
import React from "react";
import { usePathname } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Breadcrumb({ course }: { course: { name: any } | undefined; }) {
 const pathname = usePathname();
 return (
   <span>
     Course {course?.name} &gt; {pathname.split("/").pop()}
   </span>
);}
