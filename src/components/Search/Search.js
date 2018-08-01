import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
      <div className="Search">
        <TextField
          fullWidth
          label="Insert city name"
          onChange={this.handleCityChange}
        />
        <TextField
          fullWidth
          label="Insert country code"
          onChange={this.handleCountryCodeChange}
        />
        <Button size="large" color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}

export default Search;
