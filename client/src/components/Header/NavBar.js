import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={ "/logo192.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/Register'>Sign in</Link>
                <Link className = "nav-link" to='/projects'>Projects</Link>
                <a className = "nav-link" target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/groups/ufosc/events/?source=4&action_history=null&filter=calendar">
                    Events
                </a>
                <a  className = "nav-link" target='_blank' rel="noopener noreferrer" href="https://github.com/ufosc/club-resources">
                    Resources
                </a>
                <Link className = "nav-link" to="/about">About</Link>
            </div>

        </div>
    )
};

export default NavBar;
