import React from 'react';
import './Admin.css';

import PressEdit from './editors/PressEdit'
import ProjectEdit from './editors/ProjectEdit'
import Register from './Register/Register'

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "general"
        };
        this.setCurrentView = this.setCurrentView.bind(this);
    }

    //Function to change the currentView.
    setCurrentView = (newView) => {
        this.setState({currentView: newView});
    }
    
    //Sidebar render.
    SidebarView = () => {
        return (
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("general")}>General</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("projects")}>Projects</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("press")}>Press Releases</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("register")}>Register Users</button>
                            </ul>
                        </div>
        );
    }

    //Conditionally render based on the currentView, this changes the view based on the sidebar buttons.
    render() {
        const currentView = this.state.currentView;

        if(currentView === "press") {
            return(
                <div class="row">
                        <div class="sidebar-viewport">
                            <this.SidebarView/>
                        </div>
                        <div class="editor-viewport"> 
                            <PressEdit/>
                        </div>
                </div>
            );
        } else if(currentView === "register") {
            return(
                <div class="row">
                        <div class="sidebar-viewport">
                            <this.SidebarView/>
                        </div>
                        <div class="editor-viewport"> 
                            <Register/>
                        </div>
                </div>
            );
        } else if(currentView === "projects") {
            return(
                <div class="row">
                        <div class="sidebar-viewport">
                            <this.SidebarView/>
                        </div>
                        <div class="editor-viewport"> 
                            <ProjectEdit/>
                        </div>
                </div>
            );
        }
        else {
            return(
                <div class="row">
                        <div class="sidebar-viewport">
                            <this.SidebarView/>
                        </div>
                        <div class="editor-viewport"> 
                        <p>Error: Undefined View</p>
                        </div>
                </div>
            );
        }
    }
}
export default Admin;

