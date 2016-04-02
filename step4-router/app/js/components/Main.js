import React from 'react';
import Profile from './Profile';
import {Link} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "guest"
        };
    }
    render() {
        return (
                <div className="main-container">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                            <Profile name = { this.state.name } />
                            <Link to="/">Home</Link>
                            <Link to="/page1">Page1</Link>
                        </div>
                    </nav>
                
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            )
    }
}

export default Main;
