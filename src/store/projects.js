import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        name: action.payload.name,
        id: ++id,
      });
    },
  },
});

export const { projectAdded } = projectSlice.actions;
export default projectSlice.reducer;
