import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav, Button, Dropdown} from 'react-bootstrap';
import Logout from "../Logout/Logout";

class Header extends React.Component {
    constructor(props) {
        //Necessary for class components
        super(props);

        //binding this TODO: Convert class components to hooks
        this.logout = this.logout.bind(this);
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

    logout() {
        this.props.logout("/api/users/logout");
    };

    render() {

        return (

            <div className='topnav'>


                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/home">BioTork
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <div>
                                <Button className="navButton" href="/home">Home</Button>
                            </div>
                            <Dropdown >
                                <Button className="navButton" href="/about">About Us</Button>

                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/about/#timeline">Company Timeline</Dropdown.Item>
                                    <Dropdown.Item href="/about/#leadership">Leadership</Dropdown.Item>
                                    <Dropdown.Item href="/about/#sponsors">Sponsors</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown >
                                <Button className="navButton" href="/technology">Technology</Button>

                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/technology/#overview">Overview</Dropdown.Item>
                                    <Dropdown.Item href="/technology/#biotorkadvantage">BioTork Advantages</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown >
                                <Button className="navButton" href="/projects">Projects</Button>

                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/projects/#nutrition">Nutrition</Dropdown.Item>
                                    <Dropdown.Item href="/projects/#chemicals">Chemicals</Dropdown.Item>
                                    <Dropdown.Item href="/projects/#pharmacy">Pharmaceuticals</Dropdown.Item>
                                    <Dropdown.Item href="/projects/#renewables">Renewables</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div>
                                <Button className="navButton" href="/publications">Publications</Button>
                            </div>
                            <div>
                                <Button className="navButton" href="/press">Press Releases</Button>
                            </div>
                            <div>
                                <Button className="navButton" href="/contact">Contact</Button>
                            </div>

                            {!this.props.loggedIn ? (
                                <>
                                </>
                            ) : (

                                    <div>
                                        <Logout logout={this.logout} />
                                    </div>

                                )}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>


            </div>
        )
    }
}

export default Header;
