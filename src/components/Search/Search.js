import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Search.css";

class Search extends Component {
  state = {
    city: "",
    countryCode: "",
    searchError: false
  };

  handleCountryCodeChange = event => {
    this.setState({ countryCode: event.target.value, searchError: false });
  };

  handleCityChange = event => {
    this.setState({ city: event.target.value, searchError: false });
  };

  handleSubmit = () => {
    const { getWeatherByCity } = this.props;
    const { city, countryCode } = this.state;
    if (city && countryCode) {
      this.setState({ searchError: false });
      getWeatherByCity(city, countryCode.toLowerCase());
    } else {
      this.setState({ searchError: true });
    }
  };

  render() {
    return (
      <Grid
        container
        xs={12}
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Insert city name"
            onChange={this.handleCityChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Insert country code"
            onChange={this.handleCountryCodeChange}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button
            size="large"
            fullWidth
            color="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
