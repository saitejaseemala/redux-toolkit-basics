import { configureStore } from "@reduxjs/toolkit";
import bugsReducer from "./bugs";
import projectReducer from "./projects";

export const store = configureStore({
  reducer: {
    bugs: bugsReducer,
    projects: projectReducer,
  },
});
