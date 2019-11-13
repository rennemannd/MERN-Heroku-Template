import React from 'react';
import TaskList from './tasks.js';

class CaregiverCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskComplete: false,
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>

        <TaskList
        data={this.props.data}
        taskArray={this.props.taskArray} />


          <div className="form-group">
            <div>
              <label className="label">Additional Notes</label>
            </div>
            <div>
              <textarea
                className="textarea"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              </div>
            </div>

            <input
              type="submit"
              value="Submit"
              className="button is-primary"
            />

          </form>
        </div>
    );
  }
}


export default CaregiverCheckbox;

/*
{this.state.adls.map((task,key) =>
  <Tasks task={task} key={task.id} />
)}
*/
