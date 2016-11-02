var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <h2>Main Component</h2>
      {props.children}
      {/*this loads the children of Main*/}
    </div>
  );
};

module.exports = Main;
