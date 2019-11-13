import React from 'react';

class TaskList extends React.Component {

  render() {
    const tasks = this.props.taskArray;
    const data = this.props.data;

    const tasksMap = tasks.map (num => {
      const number = num.id;
      const task = data[number].task;
      return (
        <div key={number} className="form=group">
          <label className="checkbox">
            <input
              name="task"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.props.task}
            />
            {task}
          </label>
        </div>
      )
    })

    return(
      <div>{tasksMap}</div>
    )
  }
}

export default TaskList;
