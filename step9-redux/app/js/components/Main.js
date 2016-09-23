import React from 'react';
import {Link} from 'react-router';
import UserCounter from './UserCounter';

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
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-sm-3">
                            <UserCounter />
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
