import React from 'react';

class Page1 extends React.Component{
	render(){
		return ( < div > 
					This is page1 
					<button onClick={this.goHome.bind(this)}>Go to Home Page</button>
			< /div>);
	}
	goHome(){
		this.props.history.pushState(null,'/');	
	}
}

export default Page1;
