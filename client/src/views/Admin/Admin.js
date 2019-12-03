import React from 'react';
import './Admin.css';

import PressEdit from './editors/PressEdit'
import ProjectEdit from './editors/ProjectEdit'
import UserEdit from './editors/UserEdit';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "users"
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
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("users")}>User Management</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("projects")}>Projects</button>
                                <div class="divider"/>
                                <button type="button" class="btn btn-primary" onClick={() => this.setCurrentView("press")}>Press Releases</button>
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
        } else if(currentView === "users") {
            return(
                <div class="row">
                        <div class="sidebar-viewport">
                            <this.SidebarView/>
                        </div>
                        <div class="editor-viewport"> 
                            <UserEdit/>
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

