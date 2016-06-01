var React = require('react');
var ListItem = React.createClass({
  propTypes: {
    periodName: React.PropTypes.string,
    hiLoLabel: React.PropTypes.string,
    tempData: React.PropTypes.string,
    chanceOfPrecip: React.PropTypes.string,
    wxShort: React.PropTypes.string,
    wxIcon: React.PropTypes.string,
    wxLong: React.PropTypes.string
  },
  render: function() {
    var forecastStyle = {
      marginBottom: 10,
      //border: "2px solid gray",
      borderRadius: 3,
      padding: 5
    }
    var iconStyle = {
      borderRadius: 3,
      marginRight: 10,
      marginBottom: 5
    }
    var tempHiStyle = {
      color: '#ED6A5A'
    }
    var tempLoStyle = {
      color: '#5CA4A9'
    }

    var periodStyle = {
      fontSize: '1.2em'
    }

    var precipStyle = {
      fontSize: '0.9em',
      fontWeight: 600
    }

    var wxShortStyle = {
      fontStyle: "italic"
    }

    return (
      <div className="row fCastItem" style={forecastStyle}>
        <div className="col-xs-12">

          <div className="pull-left">
            <img style={iconStyle} src={this.props.wxIcon} />
          </div>

          <div className="col-sm-4">
            <div>
              <div style={periodStyle}>
                <strong>{this.props.periodName}</strong>
              </div>
              <div>
                <div style={this.props.hiLoLabel == 'High' ? tempHiStyle : tempLoStyle}>
                  <strong>{this.props.hiLoLabel}: {this.props.tempData}</strong>
                </div>
                <div style={precipStyle}>{this.props.chanceOfPrecip ? "Chance of Precip: " + this.props.chanceOfPrecip + "%": ""}</div>
              </div>
              <div>
                <div style={wxShortStyle}>{this.props.wxShort}</div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
              <div>{this.props.wxLong}</div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = ListItem;
