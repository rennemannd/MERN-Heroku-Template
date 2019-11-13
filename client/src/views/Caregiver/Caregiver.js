import React from 'react';
import PatientDropdown from '../../components/PatientDropdown.js';
import CaregiverLogArea from './CaregiverLogArea.js';
import RecentLogs from './RecentLogs.js'
import WorkSched from './WorkSchedule.js'
import CaregiverCheckboxArea from './CaregiverCheckboxArea.js';
import Calendar from '../../components/AppCalendar.js';
import '../../stylesheets/Caregiver.css';

class Caregiver extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskArray: [
        {id: 1, checked: false},
        {id: 7, checked: false},
        {id: 3, checked: false},
        {id: 5, checked: false},
        {id: 19, checked: false},
        {id: 35, checked: false},
        {id: 22, checked: false}
      ]
    };

  }


  render() {

    return (
      <div className="App">
        {/* Navbar with logo */}
        <header className="App-header">
          <div className="container-fluid">
            <div className="page-wrapper">
              <div className="component-wrapper LHS-wrapper">
                < PatientDropdown />
                < CaregiverLogArea />
                < RecentLogs />
                < WorkSched />
              </div>
              <div className="component-wrapper RHS-wrapper">
                < CaregiverCheckboxArea
                  data={this.props.data}
                  taskArray={this.state.taskArray} />
              </div>
            </div>
            <div className="page-wrapper">
              <div className="component-wrapper">
                < Calendar />
              </div>
            </div>
          </div>
        </header>
      </div>

    );
  }
}

export default Caregiver;
