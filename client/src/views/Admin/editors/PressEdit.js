import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PressEdit.css';

const PRESS_API = '/api/press';
class PressEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pressText: 'Enter Press Release content here.',
          pressImage: '',
          pressDate: new Date(),
          pressReleases: []
        };
    
        this.handlePressTextChange = this.handlePressTextChange.bind(this);
        this.handlePressImageChange = this.handlePressImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        fetch(PRESS_API)
        .then(response => response.json())
        .then(response => this.setState({ pressReleases: response }))
        .catch(err => {
            console.log("Error fetching Press Releases:" + err);
        });
      }
    
      handlePressTextChange(event) {
        this.setState({pressText: event.target.value});
      }

      handlePressImageChange(event) {
        var self = this;
        var reader = new FileReader();
        var file = event.target.files[0];
    
        reader.readAsDataURL(file);

        reader.addEventListener("load", function () {
            self.setState({pressImage: reader.result});
        }, false);
      }

      handlePressDateChange = date => {
        this.setState({
          pressDate: date
        });
      };
    
      handleSubmit(event) {
        event.preventDefault();
        fetch('/api/press', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: this.state.pressText,
                image: this.state.pressImage,
                displayed_date: this.state.pressDate
            })
        })
      }
    
      render() {

        const pressList = this.state.pressReleases.sort(function (a, b) {
          return b.displayed_date - a.displayed_date  //Sort with most recent date first.
        }).map(press => {
          return (
                    <div className="press-release">
                        <tr key={press._id}>
                            <div>
                                <td>{press.displayed_date}</td>
                            </div>
                        </tr>
                    </div>
          );
        });

        return (
          <div class="editior">
            <div class="leftcolumn">
              <form onSubmit={this.handleSubmit}>

                    <div class="press-datepicker">
                        <label>Date displayed on Press Release: </label>
                        <DatePicker
                            selected={this.state.pressDate}
                            onChange={this.handlePressDateChange}
                        />
                    </div>
                    <div class="press-fileupload">
                        <div><label>Image to Upload: </label></div>
                        <img class="press-uploadedimage" src={this.state.pressImage} />
                        <input type="file" class="form-control-file" onChange={this.handlePressImageChange}></input>
                    </div>
                    <div class="press-textarea">
                        <label>Press Release Content: </label>
                        <textarea class="form-control" rows="8" value={this.state.pressText} onChange={this.handlePressTextChange}></textarea>
                    </div>
                    <div class="press-postbutton">
                        <button type="submit" value="Submit" class="btn btn-primary">Post</button>
                    </div>

              </form>
            </div>
            <div class="rightcolumn">
              {pressList}
            </div>
              
            </div>
        );
      }

}
export default PressEdit;

