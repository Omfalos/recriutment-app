import React, { Component } from "react";
import { PropagateLoader } from "react-spinners";

import ConnectedSearch from "../../containers/Search";
import Weather from "../../containers/Wather";
import "./App.css";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

class App extends Component {
  state = {
    geolocationError: false
  };

  componentDidMount() {
    const { getWeatherByLocation } = this.props;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const coordinates = position.coords;
          getWeatherByLocation(coordinates.latitude, coordinates.longitude);
        },
        () => {
          this.setState({
            geolocationError: true
          });
        },
        options
      );
    } else {
      this.setState({
        geolocationError: true
      });
    }
  }

  render() {
    const { data, error, loading } = this.props;
    const { geolocationError } = this.state;
    return (
      <div>
        <div className="App">
          <ConnectedSearch />
        </div>
        {loading && (
          <div className="LoaderWrapper">
            <PropagateLoader loading={true} />
          </div>
        )}

        {data && <Weather />}
        {geolocationError && !data && <p>Please input city and country code</p>}
      </div>
    );
  }
}

export default App;
