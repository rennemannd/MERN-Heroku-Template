import React from 'react';
import logo from '../../assets/logo.svg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';


function Home() {
    const slider = (
      <AwesomeSlider>
        <div data-src={require('../../assets/photos/moon.webp')} className="fix"><h1 className="sliderText">Welcome to BioTork</h1></div>
        <div data-src={require('../../assets/photos/leaf.webp')} className="fix"><h1 className="sliderText">Evolution that Excites</h1></div>
        <div data-src={require('../../assets/photos/rocks.webp')} className="fix"><h1 className="sliderText"></h1></div>
      </AwesomeSlider>
    );
    return (
        <div className="grid-containerH">
            <div className="gitem">
                {slider}
            </div>
            <div className = "bgitem3">
                <div className="gitem3">
                    <h3 className="qoute">
                    Evolving beyond the imagination
                    </h3>
                </div>
            </div>
            <div className="gitem2">
                <div className="fitem1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus eu risus malesuada vehicula in a est. Duis vitae dignissim tortor. Mauris vulputate, tellus eu ornare mattis, velit mi vehicula nisl, id condimentum neque nibh cursus urna. Proin porta auctor massa, eu suscipit sapien mattis id. Phasellus id enim ut augue sollicitudin lobortis sed in libero. Morbi turpis ex, fringilla vel accumsan in, aliquet id ante. Suspendisse vulputate, ex non suscipit lobortis, neque neque ultrices dui, nec ultricies turpis ante euismod quam. Nullam varius justo nec ligula dignissim, eget egestas orci fermentum. Nunc feugiat urna eu dictum viverra. Curabitur fermentum luctus arcu. Nullam bibendum dui pharetra elit tincidunt, non semper augue tempor. Nullam elementum tellus id ex scelerisque, ut eleifend nunc imperdiet. In vel purus rhoncus, elementum ante quis, sollicitudin ipsum. 
                </div>
                <div className="fitem1">
                Aliquam erat volutpat. Suspendisse potenti. Mauris rutrum libero non fermentum laoreet. Phasellus eget eleifend est. Nullam faucibus ac sem eget mattis. Donec at ullamcorper metus. Nullam et placerat mi, vel pretium mi. Duis ac tincidunt augue. Nulla a viverra lectus. Phasellus dictum volutpat justo, in laoreet odio gravida eget. Cras molestie lacus sit amet ante tristique, dignissim sodales dui eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non cursus massa. Curabitur laoreet ultrices dolor, non convallis erat eleifend id. Maecenas tincidunt, lectus fermentum interdum luctus, augue eros accumsan tellus, quis condimentum est ante a est. Proin ac sagittis turpis.
                </div>
            </div>
            <div className="bgitem3">
                <div className="gitem2">
                    <div className="fitem1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus eu risus malesuada vehicula in a est. Duis vitae dignissim tortor. Mauris vulputate, tellus eu ornare mattis, velit mi vehicula nisl, id condimentum neque nibh cursus urna. Proin porta auctor massa, eu suscipit sapien mattis id. Phasellus id enim ut augue sollicitudin lobortis sed in libero. Morbi turpis ex, fringilla vel accumsan in, aliquet id ante. Suspendisse vulputate, ex non suscipit lobortis, neque neque ultrices dui, nec ultricies turpis ante euismod quam. Nullam varius justo nec ligula dignissim, eget egestas orci fermentum. Nunc feugiat urna eu dictum viverra. Curabitur fermentum luctus arcu. Nullam bibendum dui pharetra elit tincidunt, non semper augue tempor. Nullam elementum tellus id ex scelerisque, ut eleifend nunc imperdiet. In vel purus rhoncus, elementum ante quis, sollicitudin ipsum. 
                    </div>
                    <div className="fitem1">
                    Aliquam erat volutpat. Suspendisse potenti. Mauris rutrum libero non fermentum laoreet. Phasellus eget eleifend est. Nullam faucibus ac sem eget mattis. Donec at ullamcorper metus. Nullam et placerat mi, vel pretium mi. Duis ac tincidunt augue. Nulla a viverra lectus. Phasellus dictum volutpat justo, in laoreet odio gravida eget. Cras molestie lacus sit amet ante tristique, dignissim sodales dui eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non cursus massa. Curabitur laoreet ultrices dolor, non convallis erat eleifend id. Maecenas tincidunt, lectus fermentum interdum luctus, augue eros accumsan tellus, quis condimentum est ante a est. Proin ac sagittis turpis.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
