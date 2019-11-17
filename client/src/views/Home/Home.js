import React from 'react';
import logo from '../../assets/logo.svg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';


function Home() {
    const slider = (
      <AwesomeSlider>
        <div data-src={require('../../assets/photos/moon.webp')} ><h1></h1></div>
        <div data-src="/path/to/image-1.png" />
        <div data-src="/path/to/image-2.jpg" />
      </AwesomeSlider>
    );
    return (
        <div className="grid-container">
            <div className="gitem">
                {slider}
            </div>
            <div className="gitem2">
            </div>
        </div>
    );
}

export default Home;
