import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    const { tasks, onTaskStatusChange, onTaskDelete } = this.props;

    return (
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onTaskStatusChange={onTaskStatusChange}
            onTaskDelete={onTaskDelete}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;