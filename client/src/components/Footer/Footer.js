import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
/*
const footerStyle = {
    backgroundColor: "purple",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

const Footer = ({ children }) => {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}
*/

function Footer() {
    return (
        <div className = "footerClass">
            <div className= "rowC">
                <div className="social">
                
                    <SocialIcon target="_blank" url="https://twitter.com/BioTork/" />
                </div>
                <div className="social">
                    <SocialIcon target="_blank" url="https://www.facebook.com/biotork/" />
                
                </div>
                <div className="social">
                    COPYRIGHT BIOTORK 2017
                </div> 
            </div>


        </div>
    );
}

/*
const Footer = () => {
	return (

    )
}
*/
export default Footer;
