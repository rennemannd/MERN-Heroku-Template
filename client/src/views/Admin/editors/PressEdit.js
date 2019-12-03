import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Editor.css';

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
          isEditing: false,
          isClearing: false,
          editButton: "Post",
          clearButton: "Clear"
        };
    
        this.handlePressTextChange = this.handlePressTextChange.bind(this);
        this.handlePressTitleChange = this.handlePressTitleChange.bind(this);
        this.handlePressImageChange = this.handlePressImageChange.bind(this);
        this.handlePressDocChange = this.handlePressDocChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.setClearing = this.setClearing.bind(this);
        this.clearConfirmDialog = this.clearConfirmDialog.bind(this);
      }
      
      //Retreive existing Press Releases from API.
      componentDidMount() {
        fetch(PRESS_API)
        .then(response => response.json())
        .then(response => this.setState({ pressReleases: response }))
        .catch(err => {
            console.log("Error fetching Press Releases:" + err);
        });
      }
    
      //Changes the pressText variable onChange.
      handlePressTextChange(event) {
        this.setState({pressText: event.target.value});
      }

      //Changes the pressTitle onChange.
      handlePressTitleChange(event) {
        this.setState({pressTitle: event.target.value});
      }

      //Handles image upload.
      handlePressImageChange(event) {
        var self = this;
        var reader = new FileReader();
        var file = event.target.files[0];
    
        reader.readAsDataURL(file);

        reader.addEventListener("load", function () {
            self.setState({pressImage: reader.result});
        }, false);
      }

      //Handles optional document URL (pressDoc) onChange.
      handlePressDocChange(event) {
        this.setState({pressDoc: event.target.value});
      }

      setClearing(value) {
        this.setState({isClearing: value});
      }

      //Handles changes to the displayed date.
      handlePressDateChange = date => {
        this.setState({
          pressDate: date
        });
      };
    
      //Send new Press Release to API.
      handleSubmit(event) {
        event.preventDefault();

        //If a post is being edited, use update API instead of create.
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
          });
        //Else if a new post is being created, use the create API.
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

        
        //Reset the state after press release is created/updated.
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

      //Handles selecting an existing press release to edit.
      handleSelect(press) {
        this.setState({
          pressText: press.text,
          pressTitle: press.title,
          pressDoc: press.doc_link,
          pressImage: press.image,
          pressDate: Date.parse(press.displayed_date),

          pressID: press._id,
          isEditing: true,
          editButton: "Update",
          clearButton: "Delete"
        });
      }

      //Function for clear button, either resets state, or deletes a post.
      handleClear(event){

        if(this.state.isEditing){
          fetch('/api/press/delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: this.state.pressID
            })
        })
        } else {
          this.setState({
            pressText: 'Enter content here.',
            pressTitle: 'Enter a title here.',
            pressImage: '',
            pressDoc: '',
            pressDate: new Date(),
  
            isEditing: false
          });
        }

      }

      clearConfirmDialog(props) {
        if(this.state.isEditing){
          return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Are you sure you want to delete this post?
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Pressing Delete will delete the post "{this.state.pressTitle}" , are you sure you want to do this?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClear, props.onHide} variant="danger" >Delete</Button>
                <Button onClick={props.onHide}>Cancel</Button>
              </Modal.Footer>
            </Modal>
          );
        } else {
          return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Are you sure you want to clear?
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Pressing Clear will clear all fields, are you sure you want to do this?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClear, props.onHide} variant="danger" >Clear</Button>
                <Button onClick={props.onHide}>Cancel</Button>
              </Modal.Footer>
            </Modal>
          );
        }
      }
      
    
      render() {

        //Sort existing press releases by date, render, and store in pressList.
        const pressList = this.state.pressReleases.sort(function (a, b) {
          return Date.parse(b.displayed_date) - Date.parse(a.displayed_date)  //Sort with most recent date first.
        }).map(press => {
          return (
                    <div className="previous-releases">
                        <tr key={press._id}>
                            <div className="previous-release">
                              <td value={press} onClick={() => this.handleSelect(press)}>{press.title} Last Changed: {press.changed_date}</td>
                            </div>
                            <div class="previous-divider"/>
                        </tr>
                    </div>
          );
        });

        

        return (
          <div class="editor">
            <div class="leftcolumn">
              <form onSubmit={this.handleSubmit}>

                    <div class="-datepicker editor-element">
                        <label>Date displayed on Press Release: </label>
                        <DatePicker
                            selected={this.state.pressDate}
                            onChange={this.handlePressDateChange}
                        />
                    </div>
                    <div class="-imageupload editor-element">
                        <div><label>Image to Upload: </label></div>
                        <img class="-uploadedimage" alt="" src={this.state.pressImage} />
                        <input type="file" class="form-control-file" onChange={this.handlePressImageChange}></input>
                    </div>
                    <div class="-titlearea editor-element">
                        <label>Press Release Title: </label>
                        <textarea class="form-control" rows="1" value={this.state.pressTitle} onChange={this.handlePressTitleChange}></textarea>
                    </div>
                    <div class="-textarea editor-element">
                        <label>Press Release Content: </label>
                        <textarea class="form-control" rows="8" value={this.state.pressText} onChange={this.handlePressTextChange}></textarea>
                    </div>
                    <div class="-doclink editor-element">
                        <label>Link to document (optional): </label>
                        <textarea class="form-control" rows="1" value={this.state.pressDoc} onChange={this.handlePressDocChange}></textarea>
                    </div>
                    <div class="-postbutton editor-element">
                        <button type="submit" value="Submit" class="btn btn-primary">{this.state.editButton}</button>
                        <button type="button" variant="danger" class="btn btn-danger" onClick={() => this.setClearing(true)}>{this.state.clearButton}</button>
                    </div>
              </form>

              <this.clearConfirmDialog
                show={this.state.isClearing}
                onHide={() => this.setClearing(false)}
              />

            </div>

            <div class="rightcolumn">
              <label>Published Releases: </label>
              <div class="previous-list">{pressList}</div>
            </div>
          </div>
        );
      }
}
export default PressEdit;

