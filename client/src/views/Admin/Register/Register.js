import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        //Necessary for class components
        super(props);

        //binding this TODO: Convert class components to hooks
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Setting the default state
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            password2: "",
            registerErrors: [],
            isLoading: ""
        };
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //Need to add form validation
    onSubmit(event) {
        this.setState({ isLoading: true });
        //This allows us to exchange the default behavior for our custom behavior
        event.preventDefault();

        //Object destructuring
        const { name, username, email, password, password2 } = this.state;

        //TODO: Add frontend validation?

        //This is the user object we will send to the server
        const user = {
            name,
            username,
            email,
            password,
            password2
        };

        //this statement is only for development purposes
        //this should be removed from for a production build
        console.log(user);

        axios.post("/api/users/register", user).then(response => {
            if (response.data.success) {
                this.setState({
                    name: "",
                    username: "",
                    email: "",
                    password: "",
                    password2: "",
                    registerErrors: [{msg: "Successfully registered"}],
                    isLoading: false
                });

                console.log(`Finished! ${JSON.stringify(response.data)}`);
                //do not need to redirect to login page
                //this.props.history.push("/users/login");
            } else {
                this.setState({
                    password: "",
                    password2: "",
                    isLoading: false,
                    registerErrors: response.data.message
                });
                console.log(response.data)
                console.log(JSON.stringify(this.state))
            }
            
        });
        
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        return (
            <div>
                <h3>Register User</h3>
                {this.state.registerErrors && this.state.registerErrors.length > 0
                    ? this.state.registerErrors.map((errMsg, index) => (
                        <p className="register-error-message" key={index}>
                            {errMsg.msg}
                        </p>
                    ))
                    : null}
                <form onSubmit={e => this.onSubmit(e)}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            type="text"
                            name="username"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input
                            type="password"
                            name="password2"
                            required
                            className="form-control"
                            value={this.state.password2}
                            onChange={e => this.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Register Now!"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);
