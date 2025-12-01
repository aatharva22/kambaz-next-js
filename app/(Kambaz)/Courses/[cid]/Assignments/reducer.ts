/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        description : assignment.description
        , points : assignment.points, 
        untildt:assignment.untildt,
        title: assignment.title,
        course: assignment.course,
        duedt: assignment.duedt
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? { ...a, editing: true } : a
      ) as any;
    },
    deleteAssignment: (state, { payload: assignId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignId);
    },
    setAssignments: (state, { payload: assignment }) => {
     state.assignments = assignment;
   },
    
  },
});
export const { addAssignment, updateAssignment, editAssignment, deleteAssignment,setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
