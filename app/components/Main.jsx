var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
          {/*this loads the children of Main*/}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
