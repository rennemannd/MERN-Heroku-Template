import React from 'react';
import './Admin.css';

import PressEdit from './editors/PressEdit'
import Register from './Register/Register'

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "general"
        };
        this.setCurrentView = this.setCurrentView.bind(this);
    }

    setCurrentView = (newView) => {
        this.setState({currentView: newView});
    }
    
    SidebarView = () => {
        return (
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("general")}>General</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("projects")}>Projects</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("press")}>Press Releases</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("tech")}>Technology</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("about")}>About</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("register")}>Register Users</button>
                            </ul>
                        </div>
                    </nav>
        );
    }

    render() {
        const currentView = this.state.currentView;

        if(currentView === "press") {
            return(
                <div class="row">
                    <div>
                        <this.SidebarView/>
                    </div>
                    <div>
                        <PressEdit/>
                    </div>
                </div>
            );
        } else if(currentView === "register") {
            return(
                <div class="row">
                    <div>
                        <this.SidebarView/>
                    </div>
                    <div>
                        <Register/>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div class="row">
                    <div>
                        <this.SidebarView/>
                    </div>
                    <div>
                        <p>Error: Undefined View</p>
                    </div>
                </div>
            );
        }
    }
}
export default Admin;

