var React = require('react');
var ListItem = React.createClass({
  propTypes: {
    ingredient: React.ProTypes.string,
    price: React.PropTypes.string
  },
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredient} - {this.props.price}</h4>
      </li>
    );
  }
});

module.exports = ListItem;
