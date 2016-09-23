import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../actions/app-actions';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	var returnData;
    	if(this.props.users.length>0){
    		var rows = this.props.users.map(function(user, index){
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
        this.props.handleAddUser({name: name, age: age});
    }
}


export default Users;
