var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load Foundation's CSS with CSS Loader and load it to our HTML
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
ReactDOM.render(
  <main>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About}></Route>
        <Route path="examples" component={Examples}></Route>
        <IndexRoute component={Weather}></IndexRoute>
      </Route>
    </Router>
  </main>,
    document.getElementById('app')
  );
