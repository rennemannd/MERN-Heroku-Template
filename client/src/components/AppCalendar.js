import React, { Component } from 'react';
import Calendar from 'react-calendar';

class AppCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    const { value } = this.state;
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default AppCalendar;
