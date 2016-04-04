import React from 'react';
import ReactDOM from 'react-dom';
import UserStore from '../stores/UserStore';
import AppActions from '../actions/app-actions';

class Home extends React.Component {
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
    	var returnData;
    	if(this.state.users.length>0){
    		var rows = this.state.users.map(function(user, index){
	    		return (
	    				<tr key={index}>
	    					<td>{user.name}</td>
	    					<td>{user.age}</td>
	    				</tr>
	    			)
	    	});	

	    	returnData = (
	    			<table className="table table-bordered">
	    				<thead>
                            <tr>
	    					<th>Name</th>
	    					<th>Age</th>
                            </tr>
	    				</thead>
	    				<tbody>
	    					{rows}
	    				</tbody>
	    			</table>
	    		)
    	}
    	else{
    		returnData = (<span>No Users</span>)
    	}

        let addUserForm = (<div>
                <form onSubmit={this.handleAddUser.bind(this)}>
                    <br/>Name<input type="text" ref="name"/>
                    <br/>Age<input type="number" ref="age"/>
                    <br/><input type="submit" value="Add User" />
                </form>
            </div>
            )
    	

    	return (<div>
    			{returnData}
                {addUserForm}
    		</div>)

    }
    handleAddUser(e){
        e.preventDefault();
        var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        var age = ReactDOM.findDOMNode(this.refs.age).value.trim();
        AppActions.addItem({name: name, age: age});
    }
}

export default Home;
