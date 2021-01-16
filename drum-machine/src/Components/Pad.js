import React, { Component } from 'react';


export default class Pad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: this.props.isPlaying,
            showEdit: false
        };
        this.showEditFields = this.showEditFields.bind(this);
    }

    showEditFields() {
        let divID = "editFields" + this.props.ID;
        let showEditFields = document.getElementById(divID);
        if (!this.state.showEdit) {
            showEditFields.style.display = "block";
        }
        else {
            showEditFields.style.display = "none";
        }
        this.setState({
            showEdit: !this.state.showEdit
        });
    }

//     <div id="editFields0" style={{'display':'none'}}>
//     <label htmlFor="audio-file-1" class="custom-file-upload">
//         <IoIosAddCircle /> Choose audio file
//     </label>
//     <br /><br />
//     <input id="audio-file-1" type="file"/>
//     <audio controls loop id="audio1" type="audio/mpeg-3" src={soundfile1} >
//     </audio>
// </div>


    render() {
        let textColor = this.state.isPlaying ? "text-warning" : "text-secondary";
        return (
            <div class="col-4 bg-primary" onClick={this.showEditFields}>
                <h1 class={textColor}>Pad {this.props.ID}</h1>
            </div>
        )
    }
}
