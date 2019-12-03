import React from 'react';
import './Contact.css';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends React.Component {
    static defaultProps = {
        center: {
          lat: 29.64065,
          lng: -82.296728
        },
        zoom: 15
      };
    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
        }
      }

    render() {
        return (

        <div className="contact">
        <p>Contact Me</p>
         <div>

  <label>First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.."
    value={this.state.fname}
    onChange={e => this.setState({ fname: e.target.value })}
  />

  <label>Last Name</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name.."
    value={this.state.lname}
    onChange={e => this.setState({ lname: e.target.value })}
  />

  <label>Email</label>
  <input type="email" id="email" name="email" placeholder="Your email"
    value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}
  />


  <label>Message</label>
  <textarea id="message" name="message" placeholder="Write something.."
    onChange={e => this.setState({ message: e.target.value })}
    value={this.state.message}
  ></textarea>
  <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
           
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key:""}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
          </div>
            </div>
            </div>
          );
    }
    
    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state.fname);
        console.log(this.state.lname);
        console.log(this.state.email);
        console.log(this.state.message);
        fetch('/api/press', {
            method: 'POST',
            body: JSON.stringify({
                targetEmail: this.state.email
            })
          })

      }

}

export default Contact;