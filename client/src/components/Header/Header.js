import React from 'react';
//import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav, Button, Dropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logout from "../Logout/Logout";
import { HashLink as Link } from 'react-router-hash-link';

class Header extends React.Component {
    constructor(props) {
        //Necessary for class components
        super(props);

        //binding this TODO: Convert class components to hooks
        this.logout = this.logout.bind(this);

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
                                <Link to = "/home">
                                    <Button className="navButton">Home</Button>
                                </Link>
                            </div>
                            <Dropdown >
                                <Link to ="/about">
                                    <Button className="navButton" >About Us</Button>
                                </Link>

                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <LinkContainer to="/about/#timeline">
                                        <Dropdown.Item>Company Timeline</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/about/#leadership">
                                        <Dropdown.Item>Leadership</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/about/#sponsors">
                                        <Dropdown.Item >Sponsors</Dropdown.Item>
                                    </LinkContainer>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown >
                                <Link to="/technology">
                                    <Button className="navButton">Technology</Button>
                                </Link>
                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <LinkContainer to="/technology/#overview">
                                        <Dropdown.Item>Overview</Dropdown.Item>
                                    </LinkContainer>
                                    
                                        <Dropdown.Item href="/technology#advantages">BioTork Advantages</Dropdown.Item>
                                    
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown >
                                <Link to="/projects">
                                    <Button className="navButton">Projects</Button>
                                </Link>
                                <Dropdown.Toggle split id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <LinkContainer to="/projects/#nutrition">
                                        <Dropdown.Item>Nutrition</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/projects/#chemicals">
                                        <Dropdown.Item>Chemicals</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/projects/#pharmacy">
                                        <Dropdown.Item>Pharmaceuticals</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/projects/#renewables">
                                        <Dropdown.Item>Renewables</Dropdown.Item>
                                    </LinkContainer>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div>
                                <Link to="/publications">
                                    <Button className="navButton" >Publications</Button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/press">
                                    <Button className="navButton" >Press Releases</Button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/contact">
                                    <Button className="navButton" >Contact</Button>
                                </Link>
                            </div>
                            {!this.props.loggedIn ? (
                                <>
                                </>
                            ) : (
                                <>
                                <div>
                                    <Link to="/admin">
                                        <Button className="navButton" >Admin</Button>
                                    </Link>
                                </div>
                                <div>
                                    <Logout logout={this.logout} />
                                </div>
                                </>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;
