import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/[cid]/Modules/reducer"
import coursesReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer"
const store = configureStore({
 reducer: { coursesReducer, modulesReducer,accountReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;