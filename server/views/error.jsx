var React = require('react');
var Layout = require('./shared/layout');

var Index = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render: function() {
    return (
      <Layout title={this.props.title}>
        <div id="react-root">{this.props.message}</div>
       </Layout>
    );
  }
});

module.exports = Index;