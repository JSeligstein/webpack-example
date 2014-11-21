/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({
    render: function() {
        return <h1>{this.props.title}</h1>;
    }
});

module.exports = Header;

