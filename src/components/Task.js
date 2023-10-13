import React, { Component } from 'react';

class Task extends Component {
  handleCheckboxChange = () => {
    const { id, completed } = this.props.task;
    this.props.onCheckboxChange(id, !completed);
  };

  handleDeleteClick = () => {
    const { id } = this.props.task;
    this.props.onDeleteClick(id);
  };

  render() {
    const { title, completed } = this.props.task;
    return (
      <div className="task">
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCheckboxChange}
        />
        <span className={completed ? 'completed' : ''}>{title}</span>
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default Task;