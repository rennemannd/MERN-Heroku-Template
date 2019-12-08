import React from 'react';
import './About.css';
import cell_banner from './cell_banner_cropped.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import text from './data.js';
import tabs from './dates.js';
import names from './names.js';
import description from './description';
import Rick from './rick.png';
import HP from './HP.png';
import oak from './oak.png';
import Flippy, { FrontSide, BackSide} from 'react-flippy';
import wolf from './wolf.png';
import dead from './dead.png';
import git from './git.png';
// import Tabs, { TabPane } from "rc-tabs";
// import TabContent from "rc-tabs/lib/TabContent";
// import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

//var callback = function(key) {};
var data = text;
var info = tabs;
var names_data = names;
var desc_data = description;


class About extends React.Component {

    // fileParse() {
    //     console.log('cake');
    //     console.log(data.length);
    //     for (var i = 0; i < data.length; i++)
    //         {
    //             posts.push(data[i]);
    //         }
    //       console.log(posts);
    //       return posts;
    //    }

    render() {
       
    //   posts = this.fileParse();
    //   other = this.otherfileParse();
   
        // const name_card = names_data.map((x) => {
        //     console.log(x);
        // return (  <FrontSide
        //     style={{
        //       backgroundColor: '#41669d',
        //     }}
        //   key = {x}>
        //     {x}
        //   </FrontSide>)   
        // });
        // const textify = (x) => {
        //     var txt = JSON.stringify(x);
        //     return (
        //         <p className = 'mission'> {txt} </p>
        //     )
        // }

        const name_card = (x,z) => {
            return (  <FrontSide
                style={{
                    backgroundColor: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    color: 'white',
                    fontSize: '24px',
                    borderRadius: '80px'
                }}>
                <img src={z} className = 'crdimg' /> 
                {x}
                <span className="front"></span>
              </FrontSide>)   
            };

        // const name_desc = desc_data.map((x) => {
        //     console.log(x);
        // return (  <BackSide
        //     style={{ backgroundColor: '#175852'}} key = {x}>
        //     {x}
        //   </BackSide>
        // )   
        // });

        const name_desc = (x) => {
            return (<BackSide
                style={{ backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
                fontSize: '24px',
                borderRadius: '80px'
                }} >
                {x}
              </BackSide>)
        };
        
        const title = info.map((x) => {
            console.log(x);
        return (<Tab className = 'tabs__item' key = {x}>{x}</Tab>)   
        });

        const text = data.map((x) => {
            return (<TabPanel className = 'TimeText' key = {x}> {x}</TabPanel>)  
            });

        const ControlledTabs = (
            <Tabs className = 'primary_nav'>
                <TabList className = 'tab'>
                    {title}
                </TabList>
                {text}
            </Tabs>  
            // <Tabs defaultActiveKey={2} onChange={callback} renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}onSelect = {index => console.log(index)} >
            //     <TabPane tab="tab 1" key="1">
            //         first </TabPane>
            //     <TabPane tab="tab 2" key="2">
            //         second </TabPane>
            //     <TabPane tab="tab 3" key="3">
            //         third </TabPane>
            // </Tabs>,
            // document.getElementById("t2")
        );

        const founderCards = (x, y, z) => (
            <Flippy className = 'cards'
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '300px', height: '450px' }} /// these are optional style, it is not necessary
          >
         
          {name_card(x, z)}
          
          {name_desc(y)}
            </Flippy>
        );

        return (
            <body className = 'grid_containerA'>
                <div className="bimgbg" />
                <img className="img" src={cell_banner} center />
                <h2 className="abt">About Us</h2>
                <div className = 'mission'>                 
                    <h1 className = 'pushDown'><span>Mission Statement</span> </h1>
                    <div>
                    <p className = 'alignA'> Here at BioTork, our mission is to improve world sustainability and the environmental conditions of our planet for generations to come. Recycling waste, sustainable agriculture and renewable energy are threads that run through all of the projects we undertake. By improving biological processes, we convert low-value agricultural by-products to commodities such as renewable energy and high value supplements.</p>
                    <p className = 'alignA'> As a company, we are dedicated to preserving the gifts and harnessing the power of nature.</p>
                    </div>
                </div>
               
                <div className = 'business_info'>
                     <h1 className = 'bussmodelTitle'><span>Business Model </span></h1>
                    <div>
                    <p className = 'alignA'>The financial potential of BioTork is endless. With the license to utilize an exclusive, patented evolution technology, BioTork can improve any kind of microorganism on any substrate. The result is an infinite number of applications of our technology and expertise. Improving the cellular factories is like changing the software of a process without needing to change the hardware. Therefore, our business strategy is based on this software model.</p>
                    <p className = 'alignA'>Once a market and potential partners have been identified, BioTork offers two possible commercialization pathways for its optimized cellular factories:</p>
                    </div>
                </div>
                    <div className = 'license'>
                        <h2 className = 'it1'>Licensing</h2>
                        <p className = 'it2'>BioTork has a portfolio of proprietary strains that have already been optimized for certain industrial purposes. These strains can be licensed along with technical support services. </p>
                        <h2 className = 'it3'>Partnering</h2>
                        <p className = 'it4'> BioTork looks to establish joint partnerships with organizations for the purpose of fulfilling industrialization of new fermentation-based products developed by BioTork.</p>
                        <p className = 'it5'>This involves partnering with industry players already connected with the targeted value chain to accelerate scale-up towards commercial production.  </p>
                    
                    </div>
                    <h1 className = 'internalTitle'><span> Internal Development Projects</span> </h1>
                    <div className = 'ProjectsA'>
                        <p className = 'alignA'> <strong>Omega-3 Fatty Acids</strong>: Highly unsaturated omega-3 fatty acids like DHA and EPA are very high-value oils currently sourced from wild caught fish. BioTork has been developing heterotrophic algae capable of producing high oil titers that are rich in DHA and EPA.</p>
                        <p className = 'alignA'>These algae produce these oils with high efficiency on low-cost agroindustrial feedstocks such as thin stillage, cane juice concentrate, molasses and crude glycerol. These algae produce oil and biomass that can be used as a replacement for fish oil and fish meal in animal feed formulations and in the nutraceutical and cosmeceutical industries.</p>
                        <p className = 'alignA'><strong>Fuel Ethanol Yeasts</strong>: The fuel ethanol industry relies on S. cerevisiae as the workhorse fermentation organism. The majority of the industry relies on a single strain produced by LeSaffre called Ethanol Red. BioTork has developed a derivative of Ethanol Red that produces 2-5% more ethanol per batch. This strain has been tested by several fuel ethanol producers and its improved performance has been confirmed. We are currently in negotiations to pilot this strain with a major yeast manufacturer and corn ethanol producer. BioTork is also developing its own line of non-GMO yeasts that produce glucoamylase to reduce the enzyme costs for corn ethanol producers. In addition, BioTork is working with a major yeast developer to improve an already-commericalized genetically engineered yeast strain capable of producing glucoamylase.</p>
                        <p className = 'alignA'><strong>Distillery Yeasts</strong>: The distilled spirits industry has seen a tremendous increase in demand. Because the processes used to ferment spirits like whiskey are largely constrained by tradition, the easiest place to improve productivity is by improving the yeasts. BioTork has developed strains of yeast capable of 10-20% high ethanol productivities on real-world whiskey fermentation substrates. We are currently in discussions with whiskey producers to pilot these strains.</p>
                        <p className = 'alignA'><strong>Phytase</strong>: Phytase is a valuable enzyme used in the food and feed industries to reduce the antinutrient properties of phytic acid in grains. BioTork has developed a strain of filamentous fungus that secretes 60-fold more phytase enzyme than the parent strain. This strain can be used to produce a non-GMO phytase for the feed market. Moreover, the strain can be used as a production platform for making genetically engineered phytases with improved thermotolerant.</p>
                        <p className = 'alignA'><strong>High Temperature E. coli</strong>: E. coli is a workhorse cellular factory. BioTork has developed a strain of E. coli capable of robust growth at 49⁰C. This strain can be used as a platform chemical production strain for processes that require higher temperatures.    </p>
                    </div>

                <h1 className = 'timelineTitle'> <span>Timeline</span> </h1>
                <div className = 'timeLine'>
                    <div>
                        {ControlledTabs}
                        <img className="img" src={cell_banner} center />
                    </div>
                </div> 
                <h1 className = 'leaderTitle'><span>Leadership</span></h1>
                <div className = 'leaderCards'>
                    <div className = 'leaderCards'>
                    {founderCards(names_data[0],desc_data[0], Rick)}
                    {founderCards(names_data[1],desc_data[1], HP)}
                    {founderCards(names_data[2],desc_data[2], oak)}
                    </div>
                </div>
                <h1 className = 'sponsorTitle'><span>Our Sponsors</span></h1>
                <div className = 'sponsorLogos'>
                    <img className = 'log1' src = {wolf}/>
                    <img className = 'log2' src = {git}/>
                    <img className = 'log3' src = {dead}/>
                </div>
            </body>
        )
    }
}
export default About;