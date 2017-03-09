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
    onKeyDown: function(event) {
        let moved = false;
        if (event.keycode === 38) {
            moved = mapData.up();
        } else if (event.keycode === 37) {
            moved = mapData.left();
        } else if (event.keycode === 40) {
            moved = mapData.down();
        } else if (event.keycode === 39) {
            moved = mapData.right();
        }
        forceUpdate();
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
    },
    componentWillMount: function() {
        //Should de-register too, but the only component of the demo. Will never unmount
        document.addEventListener("keyDown", this.onKeyDown, false);
    }
});
