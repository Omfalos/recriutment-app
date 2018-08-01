import { connect } from "react-redux";
import App from "../components/App/App";

import { WEATHER_FOR_LOCATION_REQUEST } from "../actions/requestWeatherForLocation";
import { WEATHER_FOR_INPUT_REQUEST } from "../actions/requestWeatherForInput";

const ConnectedApp = connect(
  ({ weather }) => ({
    ...weather
  }),
  dispatch => ({
    getWeatherByCity: (city, countryCode = "us") =>
      dispatch({
        type: WEATHER_FOR_INPUT_REQUEST,
        payload: { city, countryCode }
      }),
    getWeatherByLocation: (lat, long) =>
      dispatch({ type: WEATHER_FOR_LOCATION_REQUEST, payload: { lat, long } })
  })
)(App);

export default ConnectedApp;
