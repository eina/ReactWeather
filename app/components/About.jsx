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
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React as a part of <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/" title="The Complete React Web App Developer Course on Udemy">The Complete React Web App Developer</a> course on Udemy.</p>
      <p>Here are some of the tools I used for this project:</p>
      <ul>
        <li><a href="https://facebook.github.io/react/" title="React by Facebook docs">React</a> - JavaScript Framework</li>
        <li><a href="http://openweathermap.org" title="Open Weather Map">Open Weather Map</a> - Weather data by city name </li>
      </ul>
    </div>
  );
};

module.exports = About;
