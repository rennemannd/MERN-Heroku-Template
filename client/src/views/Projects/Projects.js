import React from 'react';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div className="grid-containerP">
                <div className="gridItem1">
                	<h1 className ="projecthead">Nutrition</h1>
                </div>
                <div className="gridItem1list">
                	<ul className="list">
                		<li>Project 1</li>
                		<li>Project 2</li>
                		<li>Project 3</li>
                		<li>Project 4</li>
                		<li>Project 5</li>
                	</ul>
                </div>
                <div className="gridItem2">
                	<h1 className ="projecthead">Chemicals</h1>
                </div>
                <div className="gridItem2list">
                	<ul className="list">
                		<li>Project 1</li>
                		<li>Project 2</li>
                		<li>Project 3</li>
                		<li>Project 4</li>
                		<li>Project 5</li>
                	</ul>
                </div>
                <div className="gridItem3">
                	<h1 className ="projecthead">Pharmaceuticals</h1>
                </div>
                <div className="gridItem3list">
                	<ul className="list">
                		<li>Project 1</li>
                		<li>Project 2</li>
                		<li>Project 3</li>
                		<li>Project 4</li>
                		<li>Project 5</li>
                	</ul>
                </div>
                <div className="gridItem4">
                	<h1 className ="projecthead">Renewables</h1>
                </div>
                <div className="gridItem4list">
                	<ul className="list">
                		<li>Project 1</li>
                		<li>Project 2</li>
                		<li>Project 3</li>
                		<li>Project 4</li>
                		<li>Project 5</li>
                	</ul>
                </div>
            </div>
        );
    }
}
export default Projects;