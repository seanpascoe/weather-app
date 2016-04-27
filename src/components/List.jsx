var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"ham", "price":"$0.75"}, {"id":2, "text":"cheese", "price":"$0.25"}, {"id":3, "text":"potatoes", "price":"$1.75"}, {"id":4, "text":"potpie", "price":"$2.50"}];

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} price={item.price}/>;
    });

    return (<ul>{listItems}</ul>);
  }
})

module.exports = List;
