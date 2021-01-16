import React, { Component } from 'react'

export default class Pad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: this.props.isPlaying,
            // audio: this.props.audio
        };
    }
    render() {
        return (
            <div class="col-4 bg-primary">
                <h1 class="text-secondary">Pad {this.props.key}</h1>
            </div>
        )
    }
}
