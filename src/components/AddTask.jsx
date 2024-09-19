import { useDispatch } from 'react-redux';
import { addTask } from '../action';
import { useState } from 'react';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const id = Date.now(); // Simple unique ID
    dispatch(addTask({ id, description }));
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
