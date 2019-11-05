import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Header.css';

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* Logo */}
          <Link id="logo-link" to="/"><p>LOGO</p></Link>
          {/* Navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="topnav-link" to='/Caretaker'>Caretaker</Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link" to='/Caregiver'>Caregiver</Link>
            </li>
            <li className="nav-item">
              <Link className="topnav-link" to="/PatientCreate">Create Patient</Link>
            </li>
          </ul>

        </nav>
      </div>

    )
}

export default Header;
