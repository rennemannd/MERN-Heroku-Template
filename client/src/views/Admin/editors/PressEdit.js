import React from 'react';
import './PressEdit.css';

class PressEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressDate: Date,
            pressText: "",
            pressImage: ""
        };
        this.updatePressText = this.updatePressText.bind(this);
        this.updatePressImage = this.updatePressImage.bind(this);
    }

    updatePressText() {
        this.setState(state => ({pressText: state}));
    }

    updatePressImage() {
        this.setState(state => ({pressImage: state}));
    }
    
    PressEdit() {
        return(
            <form>
                <div class="press-datepicker">
                    <label>Date displayed on Press Release:</label>
                    <input type="text" class="form-control" placeholder="Month"></input>
                    <input type="text" class="form-control" placeholder="Day"></input>
                    <input type="text" class="form-control" placeholder="Year"></input>
                </div>
                <div class="press-fileupload">
                    <label>Image to Upload</label>
                    <input type="file" class="form-control-file"></input>
                </div>
                <div class="press-textarea">
                    <label>Press Release Content:</label>
                    <textarea class="form-control" rows="8"></textarea>
                </div>
                <div class="press-postbutton">
                    <button type="button" class="btn btn-primary">Post</button>
                </div>
            </form>
        )
    }

    render() {
        return(
            <div>
                <this.PressEdit/>
            </div>
        )
    }
}
export default PressEdit;

