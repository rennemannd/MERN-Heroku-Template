import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Editor.css';

const PROJECT_API = '/api/project';
class ProjectEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          projectText: 'Enter content here.',
          projectTitle: 'Enter a title here.',
          projectImage: '',
          projectDoc: '',
          projectDate: new Date(),
          projectReleases: [],

          projectID: {},
          isEditing: false,
          isClearing: false,
          editButton: "Post",
          clearButton: "Clear"
        };
    
        this.handleProjectTextChange = this.handleProjectTextChange.bind(this);
        this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
        this.handleProjectImageChange = this.handleProjectImageChange.bind(this);
        this.handleProjectDocChange = this.handleProjectDocChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.setClearing = this.setClearing.bind(this);
        this.clearConfirmDialog = this.clearConfirmDialog.bind(this);
      }
      
      //Retreive existing Projects from API.
      componentDidMount() {
        fetch(PROJECT_API)
        .then(response => response.json())
        .then(response => this.setState({ projectReleases: response }))
        .catch(err => {
            console.log("Error fetching Projects:" + err);
        });
      }
    
      //Changes the projectText variable onChange.
      handleProjectTextChange(event) {
        this.setState({projectText: event.target.value});
      }

      //Changes the projectTitle onChange.
      handleProjectTitleChange(event) {
        this.setState({projectTitle: event.target.value});
      }

      //Handles image upload.
      handleProjectImageChange(event) {
        var self = this;
        var reader = new FileReader();
        var file = event.target.files[0];
    
        reader.readAsDataURL(file);

        reader.addEventListener("load", function () {
            self.setState({projectImage: reader.result});
        }, false);
      }

      //Handles optional document URL (projectDoc) onChange.
      handleProjectDocChange(event) {
        this.setState({projectDoc: event.target.value});
      }

      setClearing(value) {
        this.setState({isClearing: value});
      }

      //Handles changes to the displayed date.
      handleProjectDateChange = date => {
        this.setState({
          projectDate: date
        });
      };
    
      //Send new Projects to API.
      handleSubmit(event) {
        event.preventDefault();

        //If a post is being edited, use update API instead of create.
        if(this.state.isEditing){
          fetch('/api/project/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: this.state.projectID,
                text: this.state.projectText,
                image: this.state.projectImage,
                title: this.state.projectTitle,
                doc_link: this.state.projectDoc,

                displayed_date: this.state.projectDate,
                changed_date: Date.now(),
                created_date: this.state.created_date
            })
          });
        //Else if a new post is being created, use the create API.
        } else {
          fetch('/api/project', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.projectTitle,
                text: this.state.projectText,
                image: this.state.projectImage,
                doc_link: this.state.projectDoc,

                displayed_date: this.state.projectDate,
                changed_date: Date.now(),
                created_date: Date.now()
            })
          });
        }

        
        //Reset the state after projects is created/updated.
        this.setState({
          projectText: 'Enter content here.',
          projectTitle: 'Enter a title here.',
          projectImage: '',
          projectDoc: '',
          projectDate: new Date(),
          projectReleases: [],

          isEditing: false
        });

        


      }

      //Handles selecting an existing projects to edit.
      handleSelect(project) {
        this.setState({
          projectText: project.text,
          projectTitle: project.title,
          projectDoc: project.doc_link,
          projectImage: project.image,
          projectDate: Date.parse(project.displayed_date),

          projectID: project._id,
          isEditing: true,
          editButton: "Update",
          clearButton: "Delete"
        });
      }

      //Function for clear button, either resets state, or deletes a post.
      handleClear(event){

        if(this.state.isEditing){
          fetch('/api/project/delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: this.state.projectID
            })
        })
        } else {
          this.setState({
            projectText: 'Enter content here.',
            projectTitle: 'Enter a title here.',
            projectImage: '',
            projectDoc: '',
            projectDate: new Date(),
  
            isEditing: false
          });
        }

        this.setClearing(false);

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
                  Pressing Delete will delete the post "{this.state.projectTitle}" , are you sure you want to do this?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClear} variant="danger" >Delete</Button>
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
                  Projecting Clear will clear all fields, are you sure you want to do this?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClear} variant="danger" >Clear</Button>
                <Button onClick={props.onHide}>Cancel</Button>
              </Modal.Footer>
            </Modal>
          );
        }
      }
      
    
      render() {

        //Sort existing projectss by date, render, and store in projectList.
        const projectList = this.state.projectReleases.sort(function (a, b) {
          return Date.parse(b.displayed_date) - Date.parse(a.displayed_date)  //Sort with most recent date first.
        }).map(project => {
          return (
                    <div className="previous-releases">
                        <tr key={project._id}>
                            <div className="previous-release">
                              <td value={project} onClick={() => this.handleSelect(project)}>{project.title} Last Changed: {project.changed_date}</td>
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
                        <label>Date displayed on Project: </label>
                        <DatePicker
                            selected={this.state.projectDate}
                            onChange={this.handleProjectDateChange}
                        />
                    </div>
                    <div class="-imageupload editor-element">
                        <div><label>Image to Upload: </label></div>
                        <img class="-uploadedimage" alt="" src={this.state.projectImage} />
                        <input type="file" class="form-control-file" onChange={this.handleProjectImageChange}></input>
                    </div>
                    <div class="-titlearea editor-element">
                        <label>Project Title: </label>
                        <textarea class="form-control" rows="1" value={this.state.projectTitle} onChange={this.handleProjectTitleChange}></textarea>
                    </div>
                    <div class="-textarea editor-element">
                        <label>Project Content: </label>
                        <textarea class="form-control" rows="8" value={this.state.projectText} onChange={this.handleProjectTextChange}></textarea>
                    </div>
                    <div class="-doclink editor-element">
                        <label>Link to document (optional): </label>
                        <textarea class="form-control" rows="1" value={this.state.projectDoc} onChange={this.handleProjectDocChange}></textarea>
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
              <label>Published Projects: </label>
              <div class="previous-list">{projectList}</div>
            </div>
          </div>
        );
      }
}
export default ProjectEdit;

