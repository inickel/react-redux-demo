var React = require('react');

var Layout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>        
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = Layout;