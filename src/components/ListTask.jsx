
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const { tasks, filter } = useSelector(state => state.tasks);
  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : (filter === 'done' ? task.isDone : !task.isDone)
  );

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default ListTask;
