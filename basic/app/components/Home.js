var React = require('react');
var Griddle = require('griddle-react');
require('../styles/home.less');

var Home = React.createClass({
	fakeData: [
	  {
	    "id": 0,
	    "name": "Mayer Leonard",
	    "city": "Kapowsin",
	    "state": "Hawaii",
	    "country": "United Kingdom",
	    "company": "Ovolo",
	    "favoriteNumber": 7
	  },
	  {
	    "id": 1,
	    "name": "Koch Becker",
	    "city": "Johnsonburg",
	    "state": "New Jersey",
	    "country": "Madagascar",
	    "company": "Eventage",
	    "favoriteNumber": 2
	  },
	  {
	    "id": 2,
	    "name": "Lowery Hopkins",
	    "city": "Blanco",
	    "state": "Arizona",
	    "country": "Ukraine",
	    "company": "Comtext",
	    "favoriteNumber": 3
	  },
	  {
	    "id": 3,
	    "name": "Walters Mays",
	    "city": "Glendale",
	    "state": "Illinois",
	    "country": "New Zealand",
	    "company": "Corporana",
	    "favoriteNumber": 6
	  },
	  {
	    "id": 4,
	    "name": "Shaw Lowe",
	    "city": "Coultervillle",
	    "state": "Wyoming",
	    "country": "Ecuador",
	    "company": "Isologica",
	    "favoriteNumber": 2
	  }
	],
	render: function(){
		return (
			<div id="home-page">
				<h2 className="text-center">
					Griddle
				</h2>
				<Griddle results={this.fakeData} />
			</div>
		)
	}
});

module.exports = Home;