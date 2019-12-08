import React from 'react';
import './Technology.css';

class Technology extends React.Component {
    render() {
        return (
            <div className="grid-containerT">
            	<div className="bg1">
                <a id="overview"/>
            		<div className="banner1">
            			<h2>Technology</h2>
            		</div>
            	</div>
            	<div className="generalInfo">
            		<p>BioTork is the world leader in the use of evolutionary optimization to develop robust cellular factories capable of converting low value carbon sources such as biomass and agro-industrial by-products into high-value bio-based chemical commodities.</p>
            	</div>
            	<div className="section2bg"/>
            	<div className="section2">
	            	<div className="techpic1">
	            		<img src={require('../../assets/photos/microscope.jpg')} />
	            	</div>
	            	<div className="pictext1">
	            		Instead of adapting the production process to the metabolic limitations of the microorganisms, we adapt the microorganisms to perform optimally in the simplest and most economical production process.
	            	</div>
            	</div>
            	<div className="bg2">
                <a id="advantages"/>
            		<div className="banner2">
            			<h2>Evolving Outside the Box</h2>
            		</div>
            	</div>
            	<div className="listTitle1">
            		BioTork can improve any type of microorganism on any kind of substrate.
            		<br />We can evolve strains for:
            	</div>
            	<div className="techList1">
            		<ul>
            			<li>Robust growth at non-optimal temperatures, pH or aeration rates that are often encountered in real-world fermentations</li>
            			<li>Higher tolerance to product inhibition or to toxic compounds produced during real world bioprocesses</li>
            			<li>Higher growth rates</li>
            			<li>Higher culture densities</li>
            			<li>greater product yield</li>
            			<li>Utilization of non-optimal carbon or nutrient sources</li>
            		</ul>
            	</div>
            </div>
        );
    }
}
export default Technology;