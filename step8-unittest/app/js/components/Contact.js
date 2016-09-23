import React from 'react';
import Profile from './Profile';
import {Link} from 'react-router';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
    }
    handleSubmit(e){
        e.preventDefault();
        var name = React.findDOMNode(this.refs.name).value.trim();
        var email = React.findDOMNode(this.refs.email).value.trim();
        this.setState({
            name,
            email
        });
    }
    render() {
        var returnData;
        if(this.state.name){
            returnData = (<div>
                            <span>Name: {this.state.name}</span>
                            <span>Email: {this.state.email}</span>
                            </div>
                )
        }
        else{
            returnData = (
                    <form className="contactUsForm" onSubmit={this.handleSubmit.bind(this)}>
                      <input type="text" placeholder="Your name" ref="name" />
                      <input type="email" placeholder="Your Email" ref="email" />
                      <input type="submit" value="Submit" />
                    </form>
            );
        }
        return (<div className="contact">
                    {returnData}
                </div>)
    }
}

export default Contact;
