import React from 'react';
import {Router, Route, Switch, Redirect  } from 'react-router-dom';
import axios from 'axios';

import history from "./history";


import Login from "./views/Login/Login"; 

import AuthenticatedComponent from "./components/AuthenticatedComponent/AuthenticatedComponent";

import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import Projects from "./views/Projects/Projects"
import Technology from "./views/Technology/Technology"
import Press from "./views/Press/Press"
import Publications from "./views/Publications/Publications"
import Admin from "./views/Admin/Admin"
import NotFound from "./views/NotFound/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.verify = this.verify.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            loggedIn: false,
            user: {}
        };

        
    }

    componentDidMount() {
        this.verify("/api/users/verify", data => {
        });
    }


    


    login(route, user, cb) {
        //in production a .catch(err => console.log(err)) should be implemented

        axios.post(route, user).then(response => {
            //set own state and execute the callback
            if (response.data.success) {
                this.setState({
                    loggedIn: true
                });
                //console.log(`Successfully logged in! ${JSON.stringify(response.data)}`);
            }
            cb(response.data);
        }).catch((error) => {
            console.log(error);
            cb(false);
        });
    }

    verify(route, cb) {
        axios.get(route).then(response => {

            //on success res.data has: success, message, user.name, user.username, user.email, user.logggedIn
            if (!response.data.success) {
                this.setState({
                    loggedIn: response.data.user.loggedIn
                });
            } else {
                this.setState({
                    user: response.data.user,
                    loggedIn: response.data.user.loggedIn
                });
            }
            cb(response.data);
        });
    }
    logout(route) {
        axios.post(route).then(response => {
            console.log(response.data);
            if (response.data.success) {

                this.setState({
                    loggedIn: false,
                    user: {}
                });
                console.log("Logout was successful!");
                history.push("/users/login");
            } else {
                console.log("Logout out failed - server error");
            }
        });
    }



    render() {


        console.log("logged in", this.state.loggedIn);
        return (
            <div>
                <Router history={history}>
                    <Header
                        logout={this.logout}
                        loggedIn={this.state.loggedIn}
                    />
                    <div className="content">
                        <Switch >
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                            <Route exact path="/about" component={About} />
                            <Route exact path="/technology" component={Technology} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/press" component={Press} />
                            <Route exact path="/publications" component={Publications} />
                            <Route
                                exact path="/users/login" 
                                render={() => (
                                    <Login login={this.login} loggedIn={this.state.loggedIn} />
                                )}
                            />

                            <AuthenticatedComponent verify={this.verify} loggedIn={this.state.loggedIn}>
                                <Switch >
                                    <Route
                                        exact path="/admin"
                                        component={Admin}
                                    />
                                    <Route component={NotFound} />
                                </Switch>
                            </AuthenticatedComponent>
                        </Switch>
                        <div className="bottom">
                            <Footer />
                        </div>
                    </div>
                </Router>
            </div>
            
        );
    }
}
export default App;
