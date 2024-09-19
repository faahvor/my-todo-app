import { useDispatch } from "react-redux";
import { filterTasks } from "../action";

const FilterTasks = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(filterTasks("all"))}>All</button>
      <button onClick={() => dispatch(filterTasks("done"))}>Done</button>
      <button onClick={() => dispatch(filterTasks("notDone"))}>Not Done</button>
    </div>
  );
};

export default FilterTasks;
