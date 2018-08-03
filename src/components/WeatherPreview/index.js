import React, { Component } from "react";
import PropType from "prop-types";
import WeatherIcons from "react-weathericons";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./WeatherPreview.css";

class WeatherPreview extends Component {
  static propTypes = {
    //todo make a better info about properties
    day: PropType.array
  };

  state = {
    activeHour: 0
  };
  renderDayWeather = () => {
    const { day } = this.props;
    const { activeHour } = this.state;
    if (!day[activeHour]) return null;
    const { temp, pressure, humidity } = day[activeHour].main;
    const { all } = day[activeHour].clouds;
    const { speed, deg } = day[activeHour].wind;
    return (
      <div className="weatherView">
        <Grid container xs={12} spacing={8}>
          <Grid item xs={6}>
            <Paper>
              {temp} <WeatherIcons size="2x" name="celsius" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              {pressure} hPa <WeatherIcons size="2x" name="barometer" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              {humidity} <WeatherIcons size="2x" name="humidity" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              {all} %<WeatherIcons size="2x" name="cloudy" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" component="h3">
              Wind:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              {speed} m/s<WeatherIcons size="2x" name="strong-wind" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="headline" component="h4">
                Wind direction:
              </Typography>
              <div className="windWrapper">
                <span
                  className="windDirection"
                  style={{ transform: `rotate(${deg}deg)` }}
                >
                  <WeatherIcons size="2x" name="wind-direction" />
                </span>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };

  render() {
    const { day } = this.props;
    return (
      <div className="weatherPreview">
        <div className="buttonWrapper">
          {day.map((hour, index) => {
            const { activeHour } = this.state;
            return (
              <Button
                color={index === activeHour ? "secondary" : "standard"}
                variant="contained"
                onClick={() => this.setState({ activeHour: index })}
              >
                {hour.dayTime}
              </Button>
            );
          })}
        </div>
        {this.renderDayWeather()}
      </div>
    );
  }
}

export default WeatherPreview;
