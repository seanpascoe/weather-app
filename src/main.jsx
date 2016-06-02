const React = require('react');
const ReactDOM = require('react-dom');
const Weather = require('./components/Weather.jsx');

var lat = "";
var lon = "";

function success(position) {
  lat = position.coords.latitude.toString();
  lon = position.coords.longitude.toString();
  doRender(lat, lon);
}
function error() {
  var main = document.getElementById('main');
  main.innerHTML = "<h2>Unable to retrieve location</h2>";
}

function doRender(latitude, longitude) {
  ReactDOM.render(<Weather lat={latitude} lon={longitude} />, document.getElementById('main'));
}

navigator.geolocation.getCurrentPosition(success, error);
