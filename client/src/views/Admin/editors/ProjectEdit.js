import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ProjectEdit.css';

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
          projects: [],

          projectID: {},
          isEditing: false
        };
    
        this.handleProjectTextChange = this.handleProjectTextChange.bind(this);
        this.handleProjectTitleChange = this.handleProjectTitleChange.bind(this);
        this.handleProjectImageChange = this.handleProjectImageChange.bind(this);
        this.handleProjectDocChange = this.handleProjectDocChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
      }
      
      //Retreive existing Projects from API.
      componentDidMount() {
        fetch(PROJECT_API)
        .then(response => response.json())
        .then(response => this.setState({ projects: response }))
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

      //Handles changes to the displayed date.
      handleProjectDateChange = date => {
        this.setState({
          projectDate: date
        });
      };
    
      //Send new Project to API.
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
        })
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
        })
        }

        
        //Reset the state after project release is created/updated.
        this.setState({
          projectText: 'Enter content here.',
          projectTitle: 'Enter a title here.',
          projectImage: '',
          projectDoc: '',
          projectDate: new Date(),
          projects: [],

          isEditing: false
        });


      }

      //Handles selecting an existing project release to edit.
      handleSelect(project) {
        this.setState({
          projectText: project.text,
          projectTitle: project.title,
          projectDoc: project.doc_link,
          projectImage: project.image,
          projectDate: Date.parse(project.displayed_date),

          projectID: project._id,
          isEditing: true
        });
      }
    
      render() {

        //Sort existing project releases by date, render, and store in projectList.
        const projectList = this.state.projects.sort(function (a, b) {
          return Date.parse(b.displayed_date) - Date.parse(a.displayed_date)  //Sort with most recent date first.
        }).map(project => {
          return (
                    <div className="previous-releases">
                        <tr key={project._id}>
                            <div className="previous-release">
                              <td value={project} onClick={() => this.handleSelect(project)}>{project.title} Last Changed: {project.changed_date}</td>
                            </div>
                        </tr>
                    </div>
          );
        });

        return (
          <div class="editior">
            <div class="leftcolumn">
              <form onSubmit={this.handleSubmit}>

                    <div class="project-datepicker">
                        <label>Date displayed on Project: </label>
                        <DatePicker
                            selected={this.state.projectDate}
                            onChange={this.handleProjectDateChange}
                        />
                    </div>
                    <div class="project-imageupload">
                        <div><label>Image to Upload: </label></div>
                        <img class="project-uploadedimage" src={this.state.projectImage} />
                        <input type="file" class="form-control-file" onChange={this.handleProjectImageChange}></input>
                    </div>
                    <div class="project-titlearea">
                        <label>Project Title: </label>
                        <textarea class="form-control" rows="1" value={this.state.projectTitle} onChange={this.handleProjectTitleChange}></textarea>
                    </div>
                    <div class="project-textarea">
                        <label>Project Content: </label>
                        <textarea class="form-control" rows="8" value={this.state.projectText} onChange={this.handleProjectTextChange}></textarea>
                    </div>
                    <div class="project-doclink">
                        <label>Link to document (optional): </label>
                        <textarea class="form-control" rows="1" value={this.state.projectDoc} onChange={this.handleProjectDocChange}></textarea>
                    </div>
                    <div class="project-postbutton">
                        <button type="submit" value="Submit" class="btn btn-primary">Post/Update</button>
                    </div>

              </form>
            </div>
            <div class="rightcolumn">
              <label>Published Projects: </label>
              {projectList}
            </div>
          </div>
        );
      }
}
export default ProjectEdit;

