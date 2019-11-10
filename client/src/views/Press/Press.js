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
        .then(response => {console.log(response); return response;})
        .then(response => this.setState({ pressReleases: response }))
        .catch(err => {
            console.log("Error fetching Press Releases:" + err);
        });
    }

	render() {

        const { pressReleases } = this.state;

        const pressList = pressReleases.map(press => {
			return (
				<tr key={press._id}>
					<td>{press.text}</td>
                    <img src={"data:image/png;base64," + press.image} />
                    <td>{press.displayed_date}</td>
				</tr>
			);
		});

        return (
            <div>{pressList}</div> 
        );
	}
}
export default Press;
