import React, { Component } from "react";
import PropType from "prop-types";
import WeatherIcons from "react-weathericons";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./WeatherPreview.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class WeatherPreview extends Component {
  static propTypes = {
    //todo make a better info about properties
    day: PropType.array
  };

  state = {
    activeHour: 0
  };
  renderDayWeather = () => {
    const { day, classes } = this.props;
    const { activeHour } = this.state;
    if (!day[activeHour]) return null;
    const { temp, pressure, humidity } = day[activeHour].main;
    const { all } = day[activeHour].clouds;
    const { speed, deg } = day[activeHour].wind;
    return (
      <div className="weatherView">
        <Grid container xs={12} spacing={8}>
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="headline" component="h4">
                Temperature:
              </Typography>
              <Typography
                variant="display2"
                gutterBottom
                align="center"
                component="span"
              >
                <span>{temp}</span>
                <WeatherIcons size="1x" name="celsius" />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="headline" component="h4">
                Pressure:
              </Typography>
              <Typography
                variant="display2"
                gutterBottom
                align="center"
                component="span"
              >
                <WeatherIcons size="1x" name="barometer" /> {pressure} hPa
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="headline" component="h4">
                Humidity:
              </Typography>
              <Typography
                variant="display2"
                gutterBottom
                align="center"
                component="span"
              >
                {humidity} <WeatherIcons size="1x" name="humidity" />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="headline" component="h4">
                Clouds:
              </Typography>
              <Typography
                variant="display2"
                gutterBottom
                align="center"
                component="span"
              >
                <WeatherIcons size="1x" name="cloudy" /> {all} %
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="headline" component="h4">
                Wind Speed:
              </Typography>
              <Typography
                variant="display2"
                gutterBottom
                align="center"
                component="span"
              >
                <WeatherIcons size="1x" name="strong-wind" /> {speed} m/s
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.root}>
              <Typography variant="headline" component="h4">
                Wind direction:
              </Typography>
              <Typography
                variant="display2"
                gutterBottom
                align="center"
                component="span"
              >
                <div className="windWrapper">
                  <span
                    className="windDirection"
                    style={{ transform: `rotate(${deg}deg)` }}
                  >
                    <WeatherIcons size="2x" name="wind-direction" />
                  </span>
                </div>
              </Typography>
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

export default withStyles(styles)(WeatherPreview);
