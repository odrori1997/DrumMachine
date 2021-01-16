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

    render() {
        let textColor = this.state.isPlaying ? "text-warning" : "text-secondary";
        return (
            <div class="col-4 p-1">
                <div class="bg-white rounded shadow">
                    <h1 class="display-1 text-success justify-content-center align-items-center">Pad {this.props.ID + 1}</h1>
                </div>
            </div>
        )
    }
}
