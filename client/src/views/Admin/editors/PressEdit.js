import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './PressEdit.css';

const PRESS_API = '/api/press';
class PressEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pressText: 'Enter content here.',
          pressTitle: 'Enter a title here.',
          pressImage: '',
          pressDoc: '',
          pressDate: new Date(),
          pressReleases: [],

          pressID: {},
          isEditing: false
        };
    
        this.handlePressTextChange = this.handlePressTextChange.bind(this);
        this.handlePressTitleChange = this.handlePressTitleChange.bind(this);
        this.handlePressImageChange = this.handlePressImageChange.bind(this);
        this.handlePressDocChange = this.handlePressDocChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
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

      handlePressTitleChange(event) {
        this.setState({pressTitle: event.target.value});
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

      handlePressDocChange(event) {
        this.setState({pressDoc: event.target.value});
      }

      handlePressDateChange = date => {
        this.setState({
          pressDate: date
        });
      };
    
      handleSubmit(event) {
        event.preventDefault();

        if(this.state.isEditing){
          fetch('/api/press/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: this.state.pressID,
                text: this.state.pressText,
                image: this.state.pressImage,
                title: this.state.pressTitle,
                doc_link: this.state.pressDoc,

                displayed_date: this.state.pressDate,
                changed_date: Date.now(),
                created_date: this.state.created_date
            })
        })
        } else {
          fetch('/api/press', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.pressTitle,
                text: this.state.pressText,
                image: this.state.pressImage,
                doc_link: this.state.pressDoc,

                displayed_date: this.state.pressDate,
                changed_date: Date.now(),
                created_date: Date.now()
            })
        })
        }

        

        this.setState({
          pressText: 'Enter content here.',
          pressTitle: 'Enter a title here.',
          pressImage: '',
          pressDoc: '',
          pressDate: new Date(),
          pressReleases: [],

          isEditing: false
        });


      }

      handleSelect(press) {
        this.setState({
          pressText: press.text,
          pressTitle: press.title,
          pressDoc: press.doc_link,
          pressImage: press.image,
          pressDate: Date.parse(press.displayed_date),

          pressID: press._id,
          isEditing: true
        });
      }
    
      render() {

        const pressList = this.state.pressReleases.sort(function (a, b) {
          return b.displayed_date - a.displayed_date  //Sort with most recent date first.
        }).map(press => {
          return (
                    <div className="previous-releases">
                        <tr key={press._id}>
                            <div className="previous-release">
                              <td value={press} onClick={() => this.handleSelect(press)}>{press.title} Last Changed: {press.changed_date}</td>
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
                    <div class="press-imageupload">
                        <div><label>Image to Upload: </label></div>
                        <img class="press-uploadedimage" src={this.state.pressImage} />
                        <input type="file" class="form-control-file" onChange={this.handlePressImageChange}></input>
                    </div>
                    <div class="press-titlearea">
                        <label>Press Release Title: </label>
                        <textarea class="form-control" rows="1" value={this.state.pressTitle} onChange={this.handlePressTitleChange}></textarea>
                    </div>
                    <div class="press-textarea">
                        <label>Press Release Content: </label>
                        <textarea class="form-control" rows="8" value={this.state.pressText} onChange={this.handlePressTextChange}></textarea>
                    </div>
                    <div class="press-doclink">
                        <label>Link to document (optional): </label>
                        <textarea class="form-control" rows="1" value={this.state.pressDoc} onChange={this.handlePressDocChange}></textarea>
                    </div>
                    <div class="press-postbutton">
                        <button type="submit" value="Submit" class="btn btn-primary">Post/Update</button>
                    </div>

              </form>
            </div>
            <div class="rightcolumn">
              <label>Published Releases: </label>
              {pressList}
            </div>
              
            </div>
        );
      }

}
export default PressEdit;

