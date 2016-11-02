var React = require('react');

//simple presentational component
// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

//using stateless functional components introduced in 0.14
var About = (props) => {
  return (
    <h3>About Component</h3>
  );
};

module.exports = About;
