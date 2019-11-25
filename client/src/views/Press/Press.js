import React from 'react';
import './Press.css';

const PRESS_API = '/api/press';
class Press extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressReleases: [] };
    }

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

        const pressList = pressReleases.sort(function (a, b) {
            return parseInt(b.displayed_date) - parseInt(a.displayed_date)  //Sort with most recent date first.
          }).map(press => {
			return (
                <div className="press-release">
                    <tr key={press._id}>
                        <div>
                            <td>{press.title}</td>
                        </div>
                        <img src={press.image} />
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

        return (
            <div>{pressList}</div> 
        );
	}
}
export default Press;
