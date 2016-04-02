import React from 'react';
import Profile from './Profile';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "guest"
        };
    }
    render() {
        return <div >
            Hello World < Profile name = { this.state.name }
        /> < /div >
    }
}

export default Main;
