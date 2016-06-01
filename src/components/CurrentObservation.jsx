var React = require('react');

var CurrentObservation = React.createClass({
  propTypes: {
    Weatherimage: React.PropTypes.string,
    Weather: React.PropTypes.string,
    Temp: React.PropTypes.string,
    Relh: React.PropTypes.string,
    Winds: React.PropTypes.string,
    Windd: React.PropTypes.string,
    Altimeter: React.PropTypes.string,
    Dewp: React.PropTypes.string,
    Visibility: React.PropTypes.string,
    Date: React.PropTypes.string
  },
  render: function() {
    var hideStyle = {
      display: "none"
    }
    var currentWXStyle = {
      background: "#247BA0",
      color: "white",
      fontSize: "1.5em",
      marginBottom: 20,
      borderRadius: 3,
      padding: 5
    }
    var wxIconStyle = {
      borderRadius: 3
    }
    var padAdj = {
      paddingLeft: 5,
      paddingRight: 5
    }
    var tempStyle = {
      fontSize: "2.2em"
    }
    var detailWXStyle = {
      fontSize: "0.65em",
      marginTop: 10
    }

    return (
      <div className="row" style={this.props.Weatherimage ? currentWXStyle : hideStyle}>
        <div>
          <div style={padAdj} className="col-xs-6 col-sm-3 col-md-2">
            <img style={wxIconStyle} src={this.props.Weatherimage ? "http://forecast.weather.gov/newimages/large/" + this.props.Weatherimage : ""} />
          </div>
          <div style={padAdj} className="col-xs-6 col-sm-4">
            <div><strong>{this.props.Weather}</strong></div>
            <div style={tempStyle}>{this.props.Temp}&deg;F</div>
            <div>{Math.round((parseInt(this.props.Temp) - 32) / (9/5))}&deg;C</div>
          </div>
          <div style={detailWXStyle} className="col-xs-12 col-sm-5">
            <div><strong>Humidity:</strong> {this.props.Relh}%</div>
            <div><strong>Wind:</strong> {this.props.Windd}&deg; {this.props.Winds} mph</div>
            <div><strong>Barometer:</strong> {this.props.Altimeter}"Hg</div>
            <div><strong>Dewpoint:</strong> {this.props.Dewp}&deg;F ({Math.round((parseInt(this.props.Dewp) - 32) / (9/5))}&deg;C)</div>
            <div><strong>Visibility:</strong> {this.props.Visibility} mi</div>
          <div><strong>Updated:</strong> {this.props.Date}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CurrentObservation;
