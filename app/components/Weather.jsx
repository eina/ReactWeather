var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

//this is going to maintain the state = container component

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    };
  },
  handleSearch: function(location){
    var that = this;
    //load
    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function(temp){
      //when we get our temp
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err){
      //error
      that.setState({
        isLoading: false
      });
      alert(err);
    });
  },
  render: function(){
    var {isLoading, location, temp} = this.state; //grab the state values to use them

    function renderMessage(){
      if(isLoading){
        //return message
        return <h3>Fetching Weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()} {/*can call functions like this as long as it returns JSX*/}
      </div>
    );
  }
});

module.exports = Weather;
