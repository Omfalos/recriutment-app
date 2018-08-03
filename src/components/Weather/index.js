import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import groupBy from "lodash/groupBy";
import moment from "moment";

import WeatherPreview from "../WeatherPreview";

import "./weather.css";

const groupByDays = list => {
  const listGroupedByDays = groupBy(list, occurrence =>
    moment(occurrence.dt_txt)
      .startOf("day")
      .format()
  );
  return Object.keys(listGroupedByDays).reduce((accumulator, currentDay) => {
    //taking only mid day temperature;
    accumulator[moment(currentDay).format("dddd")] = listGroupedByDays[
      currentDay
    ].map(hour => {
      return {
        dayTime: moment(hour.dt_txt).format("HH:mm"),
        ...hour
      };
    });
    return accumulator;
  }, {});
};

class Weather extends Component {
  state = {
    activeDay: moment().format("dddd")
  };

  renderDay = day => {
    const { activeDay } = this.state;
    return (
      <Button
        key={day}
        variant="contained"
        color={day === activeDay ? "primary" : "default"}
        onClick={() => this.setState({ activeDay: day })}
      >
        {" "}
        {day}{" "}
      </Button>
    );
  };

  render() {
    const { activeDay } = this.state;
    const { city, list } = this.props;
    if (city && list) {
      const days = groupByDays(list);
      const daysList = Object.keys(days);
      return (
        <Fragment>
          <div style={{ padding: 20 }}>
            <Grid
              container
              spacing={8}
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item xs={12}>
                <div className="cityWrapper">
                  <Typography variant="headline" component="h2">
                    City: {city.name}, {city.country}
                  </Typography>
                </div>
                <div className="dayWrapper">{daysList.map(this.renderDay)}</div>
              </Grid>
              <Grid item container xs={12} spacing={8}>
                <WeatherPreview day={days[activeDay]} />
              </Grid>
            </Grid>
          </div>
        </Fragment>
      );
    }
    return null;
  }
}

export default Weather;
