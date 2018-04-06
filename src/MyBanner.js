var ReactDOM = require("react-dom");
var React = require("react");
// var App = React.createClass({
//   displayName: "MyBanner",
//   render: function() {
//     if (this.props.show) {
//       return React.createElement("div", null, this.props.message);
//     } else {
//       return null;
//     }
//   }
// });
var App = function(props) {
  if (props.show) {
    return React.createElement(
      "div",
      null,
      "Here's the message from the owner: " + props.message
    );
  } else {
    return null;
  }
};
App.displayName = "MyBanner";
module.exports = App;
