import React from 'react';
import UserStore from '../stores/UserStore';

class UserCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: UserStore.getUsers()
        };
        this._onChange = this._onChange.bind(this);
    }
    componentWillMount(){
        UserStore.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        UserStore.removeChangeListener(this._onChange);
    }
    _onChange(){
        var users = UserStore.getUsers();
        this.setState({
            users: users
        });
    }
    render() {
    	return (<div>
    			Total users are {this.state.users.length}
    		</div>)

    }
}

export default UserCounter;
