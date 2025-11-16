import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer"
import coursesReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer"
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer"
const store = configureStore({
 reducer: { coursesReducer, modulesReducer,accountReducer, assignmentsReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;