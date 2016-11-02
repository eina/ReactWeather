var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault(); //don't submit and refresh

    var location = this.refs.location.value; //input field value

    if(location.length > 0){
      this.refs.location.value = '';  //clear the input field on the browser
      this.props.onSearch(location); //call the parent onSearch function with the location as the argument
    }
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location" placeholder="Enter city name"></input> <br/>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
