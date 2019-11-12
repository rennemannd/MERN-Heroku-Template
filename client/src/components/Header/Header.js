import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, Nav, Button, Dropdown} from 'react-bootstrap';

const Header = () => {
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
                            <Button className="navButton"  href="/about">About Us</Button>

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

                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default Header;
