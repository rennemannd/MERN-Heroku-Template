import React from "react";
import axios from "axios";
import NotFound from "../../views/NotFound"

import { withRouter, Route } from "react-router-dom";

class AuthenticatedComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            verified: false
        };
    }

    componentDidMount() {
        this.props.verify("/api/users/verify", data => {
            this.setState({
                verified: data.success
            });
            //user is not authorized or their session expired
            //move them to the login page to get a new session
            if (!data.success) {
                console.log("Session ended: " + JSON.stringify(data));
                //this.props.history.push("/users/login");
            } else {
                console.log("Authenticated user data: " + JSON.stringify(data));
            }
        });
    }


    render() {
        if (!this.props.loggedIn) {
            return (
                <Route component={NotFound} />
            );
        }
        return <div>{this.props.children}</div>;
    }
}

export default withRouter(AuthenticatedComponent);
