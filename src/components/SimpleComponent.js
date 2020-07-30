// Code SimpleComponent Here

import React from 'react';
import SimplerComponent from './SimplerComponent';

export default class SimpleComponent extends React.Component {

    state = {
        mood: "happy"
    }

    handleClick = () => {
        this.setState({
            mood: "sad"
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}