var React = require('react');
var ForecastItem = require('./ForecastItem.jsx');
var CurrentObservation = require('./CurrentObservation.jsx');
var HTTP = require('../services/httpservice.js');


var Weather = React.createClass({
  getInitialState: function() {
    return {
      lat: '',
      lon: '',
      id: '',
      name: '',
      Weatherimage: '',
      Weather: '',
      Temp: '',
      Relh: '',
      Winds: '',
      Windd: '',
      Altimeter: '',
      Dewp: '',
      Visibility: '',
      Date: '',
      theLocation: '',
      periodName:[],
      hiLoLabel:[],
      tempData:[],
      chanceOfPrecip:[],
      wxShort:[],
      wxIcon:[],
      wxLong:[]
    };
  },

  componentWillMount: function() {
    var success = (position) => {
      this.setState({lat: position.coords.latitude, lon: position.coords.longitude})
//      console.log(this.state.lat);
//      console.log(this.state.lat);
      getWxData();
    }

    var error = () => {
      this.setState({id: "Couldn't retrieve location"})
    }

    var getWxData = () => {
      HTTP.get(this.state.lat, this.state.lon)
      .then(function(dataObj) {
        this.setState({
          id: dataObj.currentobservation.id,
          name: dataObj.currentobservation.name,
          Weatherimage: dataObj.currentobservation.Weatherimage,
          Weather: dataObj.currentobservation.Weather,
          Temp: dataObj.currentobservation.Temp,
          Relh: dataObj.currentobservation.Relh,
          Winds: dataObj.currentobservation.Winds,
          Windd: dataObj.currentobservation.Windd,
          Altimeter: dataObj.currentobservation.Altimeter,
          Dewp: dataObj.currentobservation.Dewp,
          Visibility: dataObj.currentobservation.Visibility,
          Date: dataObj.currentobservation.Date,
          theLocation: dataObj.location.areaDescription,
          periodName: dataObj.time.startPeriodName,
          hiLoLabel: dataObj.time.tempLabel,
          tempData: dataObj.data.temperature,
          chanceOfPrecip: dataObj.data.pop,
          wxShort: dataObj.data.weather,
          wxIcon: dataObj.data.iconLink,
          wxLong: dataObj.data.text
        });
      }.bind(this));
    }

    navigator.geolocation.getCurrentPosition(success, error);

  },

  render: function() {

    var periodName = this.state.periodName;
    var hiLoLabel = this.state.hiLoLabel;
    var tempData = this.state.tempData;
    var chanceOfPrecip = this.state.chanceOfPrecip;
    var wxShort = this.state.wxShort;
    var wxIcon = this.state.wxIcon;
    var wxLong = this.state.wxLong;

    var listItems = function() {
      var list = [];
      for(var i = 0; i < periodName.length; i++) {
        list.push(<ForecastItem
          key={i}
          periodName={periodName[i]}
          hiLoLabel={hiLoLabel[i]}
          tempData={tempData[i]}
          chanceOfPrecip={chanceOfPrecip[i]}
          wxShort={wxShort[i]}
          wxIcon={wxIcon[i]}
          wxLong={wxLong[i]}
        />);
      }
      return list;
    }()

    return (
      <div className="container">
        <h2><small>Current Conditions at <br/></small>{this.state.name} ({this.state.id ? this.state.id : "Loading..."})</h2>
        <CurrentObservation
          Weatherimage={this.state.Weatherimage}
          Weather={this.state.Weather}
          Temp={this.state.Temp}
          Relh={this.state.Relh}
          Winds={this.state.Winds}
          Windd={this.state.Windd}
          Altimeter={this.state.Altimeter}
          Dewp={this.state.Dewp}
          Visibility={this.state.Visibility}
          Date={this.state.Date}
        />
        <h3><small>Extended Forecast for</small> <br/>{this.state.theLocation}</h3>
        <div className="forecast">{listItems}</div>
      </div>
    );
  }
})

module.exports = Weather;
