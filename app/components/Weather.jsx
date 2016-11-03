var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

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
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function(){
    var {isLoading, location, temp, errorMessage} = this.state; //grab the state values to use them

    function renderMessage(){
      if(isLoading){
        //return message
        return <h3 className="text-center">Fetching Weather...</h3>;
      }else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()} {/*can call functions like this as long as it returns JSX*/}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
