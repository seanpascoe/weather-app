var Fetch = require('whatwg-fetch');

var service = {
  get: function(lat, lon) {
    return fetch('http://forecast.weather.gov/MapClick.php?lat=' + lat + '&lon=' + lon + '&FcstType=json')
    .then(function(response) {
      return response.json();
    });
  }
};

module.exports = service;
