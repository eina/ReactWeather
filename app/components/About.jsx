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
    <div>
      <h3>About</h3>
      <p>Welcome to the About page!</p>
    </div>
  );
};

module.exports = About;
