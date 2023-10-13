import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
  }

  render() {
    return (
      <div>
        <h1>My Tasks</h1>
        <AddTask addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;