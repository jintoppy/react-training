import React from 'react';
import ReactDOM from 'react-dom';

class Page1 extends React.Component{
	render(){
		return ( < div > 
					This is page1 
					<button onClick={this.goHome.bind(this)}>Go to Home Page</button>
					<input type="text" ref="username" />
					<button onClick={this.findGithub.bind(this)}>Get Github Details</button>
			< /div>);
	}
	findGithub(){
		var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
		this.props.history.pushState(null,'/github/'+username);	
	}
	goHome(){
		this.props.history.pushState(null,'/');	
	}
}

export default Page1;
