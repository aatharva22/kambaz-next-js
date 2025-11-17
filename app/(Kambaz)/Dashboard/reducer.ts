/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments:enrollments,
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: enrollment._id,
        course:enrollment.course,
        user: enrollment.user
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unEnroll: (state, { payload: {courseId , userId} }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) =>  !(e.course === courseId && e.user === userId));
    },
   
  },
});
export const { enroll, unEnroll} =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;
