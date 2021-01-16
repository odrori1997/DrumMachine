import React, { Component } from 'react';
import Pad from './Pad.js';
import soundfile1 from '../assets/c# minior jam track 12.12.2020.mp3';
import soundfile2 from '../assets/will this be the end of us loop.mp3';
import soundfile3 from '../assets/jam track 12.21.2020.mp3';
import soundfile4 from '../assets/jam track 1.2.2021.mp3';
import soundfile5 from '../assets/jam 1.3.2021.mp3';
import soundfile6 from '../assets/jam track 1.6.2021.mp3';
import soundfile7 from '../assets/jam track 12.21.2020.mp3';
import soundfile8 from '../assets/ig jam track in d 11.2.2020.mp3';
import soundfile9 from '../assets/can\'t say goodbye.mp3';


export default class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pads: Array(9).fill(false)
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.soundfiles = [new Audio(soundfile1), new Audio(soundfile2), new Audio(soundfile3), new Audio(soundfile4), new Audio(soundfile5), 
            new Audio(soundfile6), new Audio(soundfile7), new Audio(soundfile8), new Audio(soundfile9)];
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    //  todo:
    // fix bootstrap to be in a proper grid.
    handleKeyPress(e) {
        console.log(e.keyCode + " pressed");
        // "q" button pressed
        if (e.keyCode === 81) {
            this.play(0);
        }
        // "w" button pressed
        if (e.keyCode === 87) {
            this.play(1);
        }
        // "e" button pressed
        if (e.keyCode === 69) {
            this.play(2);
        }
        // "a" button pressed
        if (e.keyCode === 65) {
           this.play(3);
        }
        // "s" button pressed
        if (e.keyCode === 83) {
           this.play(4);
        }
        // "d" button pressed
        if (e.keyCode === 68) {
            this.play(5);
        }
        // "z" button pressed
        if (e.keyCode === 90) {
           this.play(6);
        }
        // "x" button pressed
        if (e.keyCode === 88) {
            this.play(7);
        }
        // "d" button pressed
        if (e.keyCode === 67) {
            this.play(8);
        }
    }

    play = (id) => {
        console.log("Pad " + this.props.ID + " is playing.");
        if (!this.state.pads[id]) {
            this.soundfiles[id].play();
        }
        else {
            this.soundfiles[id].pause();
        }
        let newPads = this.state.pads;
        newPads[id] = !this.state.pads[id];
        this.setState({
            pads: newPads
        });
    }

    render() {
        let pads = [];
        for (let i = 0; i < 9; i++) {
            console.log("Pushing Pad with ID " + i + " with isPlaying prop " + this.state.pads[i]);
            pads.push(<Pad key={i} ID={i} isPlaying={this.state.pads[i]} audio={this.soundfiles[i]} />)
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
