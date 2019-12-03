import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import './Editor.css';

const USER_API = '/api/users';
class UserEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",

            users: [],

            userID: {},
            isEditing: false,
            isClearing: false,
            editButton: "Create",
            clearButton: "Clear"
        };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);

        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.setClearing = this.setClearing.bind(this);
        this.clearConfirmDialog = this.clearConfirmDialog.bind(this);
      }
      
      //Retreive existing Users from API.
      componentDidMount() {
        fetch(USER_API)
        .then(response => response.json())
        .then(response => this.setState({ users: response }))
        .catch(err => {
            console.log("Error fetching Users:" + err);
        });
      }
    
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }

      handleUsernameChange(event) {
        this.setState({username: event.target.value});
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }

      handlePasswordChange(event) {
        this.setState({password: event.target.value});
      }

      handleConfirmPasswordChange(event) {
        this.setState({confirmPassword: event.target.value});
      }

      setClearing(value) {
        this.setState({isClearing: value});
      }
    
      //Send new User Release to API.
      handleSubmit(event) {
        event.preventDefault();

        //If a post is being edited, use update API instead of create.
        if(this.state.isEditing){
          fetch('/api/users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.name,
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              password2: this.state.confirmPassword
            })
          });
        //Else if a new post is being created, use the create API.
        } else {
          fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.confirmPassword
            })
          })
        }

        
        //Reset the state after user release is created/updated.
        this.setState({
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",

            users: [],

            userID: {},
            isEditing: false,
            isClearing: false,
            editButton: "Create",
            clearButton: "Clear"
        });


      }

      //Handles selecting an existing user release to edit.
      handleSelect(user) {
        this.setState({
            name: user.name,
            username: user.username,
            email: user.email,
            password: "",
            confirmPassword: "",

            userID: user._id,
            isEditing: true,
            editButton: "Update",
            clearButton: "Delete"
        });
      }

      //Function for clear button, either resets state, or deletes a post.
      handleClear(event){

        if(this.state.isEditing){
          fetch('/api/users', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.name,
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              password2: this.state.confirmPassword
          })
        })
        } else {
          this.setState({
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",

            users: [],

            userID: {},
            isEditing: false,
            isClearing: false,
            editButton: "Create",
            clearButton: "Clear"
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
                  Pressing Delete will delete the user "{this.state.name}" , are you sure you want to do this?
                </p>
                <p>
                  Make sure the password for the user has been entered, or the user will not be deleted.
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
                  Pressing Clear will clear all fields, are you sure you want to do this?
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

        //Sort existing user releases by date, render, and store in users.
        const users = this.state.users.sort(function (a, b) {
          return (a.name - b.name)
        }).map(user => {
          return (
                    <div className="previous-releases">
                        <tr key={user._id}>
                            <div className="previous-release">
                              <td value={user} onClick={() => this.handleSelect(user)}>{user.name} {user.email}</td>
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
                    <div class="editor-element">
                        <label>Full Name: </label>
                        <Form.Control placeholder="First Last" class="form-control" rows="1" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div class="editor-element">
                        <label>Username: </label>
                        <Form.Control placeholder="Username" class="form-control" rows="1" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div class="editor-element">
                        <label>Email: </label>
                        <Form.Control type="email" placeholder="name@example.com" class="form-control" rows="1" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>
                    <div class="editor-element">
                        <label>Password: </label>
                        <Form.Control class="form-control" type="password" placeholder="Enter Password (At least 6 characters)" rows="1" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div class="editor-element">
                        <label>Confirm Password: </label>
                        <Form.Control class="form-control" type="password" placeholder="Confirm Password" rows="1" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
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
              <label>Current Users: </label>
              <div class="previous-list">{users}</div>
            </div>
          </div>
        );
      }
}
export default UserEdit;

