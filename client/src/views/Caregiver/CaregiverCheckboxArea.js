import React, { Component } from 'react';

class CaregiverCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: false,
      task2: false,
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

          <div className="form-group">
            <label className="checkbox">
              <input
                name="task"
                type="checkbox"
                checked={this.state.task}
                onChange={this.handleChange}
              />
              Task 1
            </label>
          </div>

          <div className="form-group">
            <label className="checkbox">
              <input
                name="task2"
                type="checkbox"
                checked={this.state.task2}
                onChange={this.handleChange}
              />
              Task 2
            </label>
          </div>

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
