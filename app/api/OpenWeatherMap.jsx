var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3e573524a0d41ab1dbfe419ed83e3538&units=metric'; //variable that can't be altered

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var reqestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //es6 templating feature

    //axios uses Promises
    return axios.get(reqestURL).then(function(res){
      //successfa``
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    }, function(res){
      //error
      throw new Error(res.data.message); //this is the message OpenWeatherMap will give us
    });
  }
};
