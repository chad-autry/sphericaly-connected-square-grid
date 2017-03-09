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
    onKeyPress: function(event) {
        let moved = false;
        if (event.key == 'w') {
            moved = mapData.up();
        } else if (event.key == 'a') {
            moved = mapData.left();
        } else if (event.key == 's') {
            moved = mapData.down();
        } else if (event.key == 'd') {
            moved = mapData.right();
        }
        forceUpdate();
    },
    render: function() {
        var childrenWithProps = React.cloneElement(this.props.children, {mapData: mapData, onKeyPress:this.onKeyPress});
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
