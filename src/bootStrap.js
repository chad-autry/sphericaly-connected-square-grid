"use strict";
//This JS file simply bootstraps the app from the root component when the window loads

var AppRoot = require('./components/AppRoot.jsx');
var Home = require('./components/Home.jsx');
var IndexRedirect = require('react-router').IndexRedirect;
var React = require('react');
var ReactDOM = require('react-dom');
var Redirect = require('react-router').Redirect;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var useRouterHistory = require('react-router').useRouterHistory;
var createHistory = require('history').createHistory;


const history = useRouterHistory(createHistory)({
  basename: '/'
});

//Keep references to these outside of the function
var appRootComponent;

//This function executes immediately
(function() {
    //This function is attached to execute when the window loads
    document.addEventListener('DOMContentLoaded', function() {
        
        ReactDOM.render(
            /* jshint ignore:start */
            <Router history={history}>
                <Route path="/" component={AppRoot}>
                    <IndexRedirect to="/home" />
                    <Route path="/home" component={Home}/>
                    <Redirect from="*" to="/home"/>
                </Route>
            </Router>, document.getElementById('app')
            /* jshint ignore:end */
        );

    });
})();
