var Footer = require('./Footer.jsx');
var NavBar = require('./NavBar.jsx');
var React = require('react');
var MapData = new require('./MapData.js');

var mapData = new MapData(22,22);
module.exports = React.createClass({
    
    getInitialState: function() {

        //Set the initial authentication state
        return {wrapStyle: "Traditional"};
    },
    onKeyDown: function(event) {
        let moved = false;
        if (event.keyCode === 38) {
            moved = mapData.up();
        } else if (event.keyCode === 37) {
            moved = mapData.left();
        } else if (event.keyCode === 40) {
            moved = mapData.down();
        } else if (event.keyCode === 39) {
            moved = mapData.right();
        }
        if (moved) {
            this.forceUpdate();
        }
    },
    arrowClicked: function(arrow) {
        let moved = false;
        if (arrow === "up") {
            moved = mapData.up();
        } else if (arrow === "left") {
            moved = mapData.left();
        } else if (arrow === "down") {
            moved = mapData.down();
        } else if (arrow === "right") {
            moved = mapData.right();
        }
        if (moved) {
            this.forceUpdate();
        }
    },
    onWrapStyleChanged: function(event) {
        mapData.setWrapStyle(event.target.value); 
        this.setState({wrapStyle: event.target.value});
    },
    render: function() {
        var childrenWithProps = React.cloneElement(this.props.children, {onWrapStyleChanged: this.onWrapStyleChanged,
            wrapStyle:this.state.wrapStyle, mapData: mapData, arrowClicked: this.arrowClicked});
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
        document.addEventListener("keydown", this.onKeyDown, false);
    }
});
