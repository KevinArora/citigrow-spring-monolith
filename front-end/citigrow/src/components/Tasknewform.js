import React, { Component } from 'react';
class Tasknewform extends Component {
  state = {
    newTask:{}
  }
  handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedNewTask = {...this.statenewTask}
    this.setState({newTask:updatedNewTask});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createTask(this.state.newTask);
  }
  render() { 
    return ( <div>
      <div>
      <h2>Add a New Task</h2>

      <form onSubmit={this.handleSubmit}>
          <div>
              <label htmlFor="title">Title</label>
              <input
                  name="title"
                  type="text"
                  onChange={this.handleChange} />
          </div>

          <div>
              <label htmlFor="description">Description</label>
              <input
                  name="description"
                  type="text"
                  onChange={this.handleChange} />
          </div>
          
          <div>
              <input type="submit" value="Create Task"/>
          </div>
      </form>

      <hr />
      <hr />
  </div>
  </div> )
  }
}
 
export default Tasknewform;