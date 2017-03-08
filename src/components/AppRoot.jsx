var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');
var MapData = new require('./MapData.js');

var mapData = new MapData(22,22);
module.exports = React.createClass({
    
    getInitialState: function() {

        //Set the initial authentication state
        return {isAuthenticated: false};
    },
    render: function() {
        var childrenWithProps = React.cloneElement(this.props.children, {mapData: mapData});
        return (
            /* jshint ignore:start */
            <div className="container-fluid">
                <NavBar/>
                {childrenWithProps}
                <Footer/>
            </div>
            /* jshint ignore:end */
        );
    }
});
