var App = React.createClass({
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
});

ReactDOM.render(React.createElement(App, { name: "world" }), document.getElementById('container'));
