import { Provider } from "react-redux";
import AddTask from "./components/AddTask";
import FilterTasks from "./components/FilterTasks";
import ListTask from "./components/ListTask";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <div>
      <h1>ToDo Application</h1>
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  </Provider>
);

export default App;
