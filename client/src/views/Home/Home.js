import React from 'react';
import logo from '../../assets/logo.svg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';


function Home() {
    const slider = (
      <AwesomeSlider>
        <div data-src={require('../../assets/photos/moon.webp')} className="fix"><h1 className="sliderText">Innovation That Excites</h1></div>
        <div data-src={require('../../assets/photos/leaf.webp')} className="fix"><h1 className="sliderText">When You're Here, You're Family</h1></div>
        <div data-src={require('../../assets/photos/rocks.webp')} className="fix"><h1 className="sliderText">Wendys, Love a Hamburger</h1></div>
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
