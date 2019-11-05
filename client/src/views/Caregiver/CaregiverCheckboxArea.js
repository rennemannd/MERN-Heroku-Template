import React from 'react';

class CaregiverCheckbox extends React.Component {
    render() {
      return (
        <div>
          <form>
            <div className="form-group form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
              <label className="form-check-label" for="defaultCheck1">
                Task 1
              </label>
            </div>
            <div className="form-group form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"></input>
              <label className="form-check-label" for="defaultCheck2">
                Task 2
              </label>
            </div>
            <div class="form-group">
              <label for="AddNotes">Password</label>
              <input type="text" className="form-control" id="AddNotes" placeholder="Additional Notes"></input>
            </div>
            <button type="submit" className="btn btn-primary">Log</button>
          </form>
        </div>
      )
    }
}

export default CaregiverCheckbox;
