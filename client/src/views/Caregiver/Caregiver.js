import React from 'react';
import PatientDropdown from '../../components/PatientDropdown.js';
import CaregiverLogArea from './CaregiverLogArea.js';
import RecentLogs from './RecentLogs.js'
import WorkSched from './WorkSchedule.js'
import CaregiverCheckboxArea from './CaregiverCheckboxArea.js';
import Calendar from '../../components/AppCalendar.js';
import '../../stylesheets/Caregiver.css';

function Caregiver() {
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
                < CaregiverCheckboxArea />
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

export default Caregiver;
