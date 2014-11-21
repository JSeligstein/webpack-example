/** @jsx React.DOM */

var React = require('react');
var Header = require('webpack-example').ui.Header;

var App = React.createClass({
    render: function() {
        return (<Header title="Hello World!" />);
    }
});

module.exports = App;
