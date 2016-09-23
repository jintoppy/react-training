import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../actions/app-actions';
import {connect} from 'react-redux';
import Users from '../components/Users';


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddUser: (item) => {
      dispatch(AppActions.addItem(item))
    }
  }
}

const Home = connect(
        mapStateToProps, 
        mapDispatchToProps
    )(Users)

export default Home;
