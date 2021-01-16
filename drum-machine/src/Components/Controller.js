import React, { Component } from 'react';
import Pad from './Pad.js';

export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pads: Array(9).fill(null)
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    handleKeyPress(e) {
        // "q" button pressed
        if (e.keyCode === 81) {
            let newPads = this.state.pads;
            newPads[0] = true;
            this.setState({
                pads: newPads
            });
        }
        // "w" button pressed
        if (e.keyCode === 87) {
            let newPads = this.state.pads;
            newPads[1] = true;
            this.setState({
                pads: newPads
            });
        }
        // "e" button pressed
        if (e.keyCode === 69) {
            let newPads = this.state.pads;
            newPads[2] = true;
            this.setState({
                pads: newPads
            });
        }
        // "a" button pressed
        if (e.keyCode === 65) {
            let newPads = this.state.pads;
            newPads[3] = true;
            this.setState({
                pads: newPads
            });
        }
        // "s" button pressed
        if (e.keyCode === 83) {
            let newPads = this.state.pads;
            newPads[4] = true;
            this.setState({
                pads: newPads
            });
        }
        // "d" button pressed
        if (e.keyCode === 68) {
            let newPads = this.state.pads;
            newPads[5] = true;
            this.setState({
                pads: newPads
            });
        }
        // "z" button pressed
        if (e.keyCode === 90) {
            let newPads = this.state.pads;
            newPads[6] = true;
            this.setState({
                pads: newPads
            });
        }
        // "x" button pressed
        if (e.keyCode === 88) {
            let newPads = this.state.pads;
            newPads[7] = true;
            this.setState({
                pads: newPads
            });
        }
        // "d" button pressed
        if (e.keyCode === 67) {
            let newPads = this.state.pads;
            newPads[8] = true;
            this.setState({
                pads: newPads
            });
        }
        // TODO:
        // learn how to play audio through react
    }

    render() {
        let pads = [];
        for (let i = 0; i < 9; i++) {
            pads.push(<Pad key={i} isPlaying={this.state.pads[i]} />)
        }
        return (
            <div class="container">
                <div class="row">
                    {pads[0]}
                    {pads[1]}
                    {pads[2]}
                </div>
                <div class="row">
                    {pads[3]}
                    {pads[4]}
                    {pads[5]}
                </div>
                <div class="row">
                    {pads[6]}
                    {pads[7]}
                    {pads[8]}
                </div>
            </div>
        )
    }
}
