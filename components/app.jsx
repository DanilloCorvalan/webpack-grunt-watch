/** @jsx React.DOM */

var React = require('react');

var SomeComponent = require('./some-component');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Root</h1>
        <SomeComponent />
      </div>
    );
  }
});



React.renderComponent(<App />, document.getElementById('content'));