import React from 'react';
import Profile from './Profile';
import {Link} from 'react-router';
import $ from 'jquery';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    componentDidMount(){
        let url = 'https://api.github.com/users/'+this.props.params.username;
        this.serverRequest = $.get(url);
        this.serverRequest.then((user)=>{
            this.setState({
                user
            });
        });
    }
    componentWillUnmount(){
        this.serverRequest.abort();
    }    
    render() {
        let user = this.state.user;
        var returnData;
        if(user && user.name){
            returnData = (
                <div>
                    Github Page 
                    <h2>{user.name}</h2>
                    <img src={user.avatar_url} />
                </div>
            );
        }
        else{
            returnData = (
                    <h3>Github Data loading...</h3>
                )
        }
        return (<div>
                {returnData}
            </div>)
    }
}

export default Github;
