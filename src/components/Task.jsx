/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../action";

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => dispatch(toggleTask(id))}
      />
      <span>{description}</span>
      <button
        onClick={() => dispatch(editTask(id, prompt("New description:")))}
      >
        Edit
      </button>
    </div>
  );
};

export default Task;
