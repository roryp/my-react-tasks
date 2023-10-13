import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTask(this.state.title);
      this.setState({
        title: ''
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add task..." value={this.state.title} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTask;