import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

let UserCounter =({users}) => {
    	return (<div>
    			Total users are {users.length}
    		</div>)

}

UserCounter = connect(mapStateToProps)(UserCounter)

export default UserCounter;
