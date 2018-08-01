import { connect } from "react-redux";
import Search from "../components/Search/Search";

import { WEATHER_FOR_INPUT_REQUEST } from "../actions/requestWeatherForInput";

const ConnectedSearch = connect(
  () => ({}),
  dispatch => ({
    getWeatherByCity: (city, countryCode = "us") =>
      dispatch({
        type: WEATHER_FOR_INPUT_REQUEST,
        payload: { city, countryCode }
      })
  })
)(Search);

export default ConnectedSearch;
