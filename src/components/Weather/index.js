import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Weather extends Component {
  render() {
    const { city, list } = this.props;
    if (city && list) {
      return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <p>{city.name}</p>
            <p>{city.country}</p>
          </Grid>
        </Grid>
      );
    }
    return null;
  }
}

export default Weather;
