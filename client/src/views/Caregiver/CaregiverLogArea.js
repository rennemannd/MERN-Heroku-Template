import React from 'react';

class CaregiverLogArea extends React.Component {
    render() {
      return (
        <div>
          <div className="checkin_out">
            {/* Checkin form */}
            <form>
              <div className="row">
                <div className="col">
                  <label for="checkin_form">Check in:</label>
                </div>
                <div className="col">
                  <input type="text" className="form-control"id="checkin_hr" placeholder="Hour"></input>
                </div>
                :
                <div className="col">
                  <input type="text" className="form-control" id="checkin_min" placeholder="Minute"></input>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary">In</button>
                </div>
              </div>
            </form>

            {/* Checkout form */}
            <form>
              <div className="row">
                <div className="col">
                  <label for="checkin_form">Check in:</label>
                </div>
                <div className="col">
                  <input type="text" className="form-control"id="checkin_hr" placeholder="Hour"></input>
                </div>
                :
                <div className="col">
                  <input type="text" className="form-control" id="checkin_min" placeholder="Minute"></input>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary">Out</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      )
    }
}

export default CaregiverLogArea;
