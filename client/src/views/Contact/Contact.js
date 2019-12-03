import React from 'react';
import './Contact.css';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends React.Component {
    static defaultProps = {
        center: {
          lat: 29.64065,
          lng: -82.296728
        },
        zoom: 15
      };

    render() {
        return (
            <div className="contact">
            <p>Contact Me</p>
            
            <div>

            <form action="/action_page.php">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />


        
            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit" />

            <div style={{ height: '100vh', width: '100%' }}>
            
            <GoogleMapReact
              bootstrapURLKeys={{ key:"AIzaSyDnfmjZbEobwm3xYpaG-UIqqla-Dabc9gQ"}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
          </div>



            </form>
            </div>
            </div>
            
        
          );
    }

}

export default Contact;