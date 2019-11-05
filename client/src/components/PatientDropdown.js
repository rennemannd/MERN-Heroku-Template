import React from 'react';

class PatientDropdown extends React.Component {
    render() {
      return (
        <div>
          <div className="dropdown patient-dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Patient Dropdown
            </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Patient 1</a>
                <a className="dropdown-item" href="#">Patient 2</a>
              </div>
            </div>
        </div>
      )
    }
}

export default PatientDropdown;
