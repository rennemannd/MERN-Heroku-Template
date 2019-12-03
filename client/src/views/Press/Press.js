import React from 'react';
import './Press.css';

const PRESS_API = '/api/press';
class Press extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressReleases: [] };
    }

    //Get Press Releases from API as an array.
    componentDidMount() {
        fetch(PRESS_API)
        .then(response => response.json())
        .then(response => this.setState({ pressReleases: response }))
        .catch(err => {
            console.log("Error fetching Press Releases:" + err);
        });
    }

	render() {

        const { pressReleases } = this.state;

        //Sort Press Releases by date, render each press release object, store in pressList variable.
        const pressList = pressReleases.sort(function (a, b) {
            return parseInt(Date.parse(b.displayed_date)) - parseInt(Date.parse(a.displayed_date))  //Sort with most recent date first.
          }).map(press => {
			return (
                <div className="press-release">
                    <tr key={press._id}>
                        <div>
                            <td>{press.title}</td>
                        </div>
                        <img alt="" src={press.image} />
                        <div>
                            <td>{press.text}</td>
                        </div>
                        <div>
                            <td>{press.displayed_date}</td>
                        </div>
                        <div>
                            <a href={press.doc_link}>Document Link</a>
                        </div>
                    </tr>
                </div>
			);
		});

        //Return pressList variable of rendered press releases.
        return (
            <div>{pressList}</div> 
        );
	}
}
export default Press;
