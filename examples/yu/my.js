// tutorial1.js
/** @jsx React.DOM */
'use strict';

var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">Hello, world! I am a CommentBox.</div>
    );
  }
}
);

React.render(
  <CommentBox />,
  document.getElementById('content')
);