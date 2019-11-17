import React from 'react';
import './PressEdit.css';

class PressEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pressText: 'Enter Press Release content here.',
          pressImage: ''
        };
    
        this.handlePressTextChange = this.handlePressTextChange.bind(this);
        this.handlePressImageChange = this.handlePressImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.pressText);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>

                <div class="press-datepicker">
                    <label>Date displayed on Press Release:</label>
                    <input type="text" class="form-control" placeholder="Month"></input>
                    <input type="text" class="form-control" placeholder="Day"></input>
                    <input type="text" class="form-control" placeholder="Year"></input>
                </div>
                <div class="press-fileupload">
                    <div><label>Image to Upload</label></div>
                    <img class="press-uploadedimage" src={this.state.pressImage} />
                    <input type="file" class="form-control-file" onChange={this.handlePressImageChange}></input>
                </div>
                <div class="press-textarea">
                    <label>Press Release Content:</label>
                    <textarea class="form-control" rows="8" value={this.state.pressText} onChange={this.handlePressTextChange}></textarea>
                </div>
                <div class="press-postbutton">
                    <button type="submit" value="Submit" class="btn btn-primary">Post</button>
                </div>

          </form>
        );
      }

}
export default PressEdit;

