import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        description: action.payload.description,
        id: ++id,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.id);
      bugs[index].resolved = true;
    },
    bugDeleted: (bugs, action) => {
      return bugs.filter((bug) => bug.id !== action.id);
    },
  },
});

export const { bugAdded, bugDeleted, bugResolved } = slice.actions;
export default slice.reducer;
