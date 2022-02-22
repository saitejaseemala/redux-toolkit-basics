import { store } from "./store/store";
import { bugAdded, bugDeleted, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";

store.dispatch(
  bugAdded({
    description: "Hi",
  })
);

store.dispatch(
  projectAdded({
    name: "Redux project",
  })
);

console.log(store.getState());
