import {
  WEATHER_FOR_INPUT_REQUEST_IN_PROGRESS,
  WEATHER_FOR_INPUT_REQUEST_SUCCESS,
  WEATHER_FOR_INPUT_REQUEST_FAILED
} from "../actions/requestWeatherForInput";
import {
  WEATHER_FOR_LOCATION_REQUEST_IN_PROGRESS,
  WEATHER_FOR_LOCATION_REQUEST_SUCCESS,
  WEATHER_FOR_LOCATION_REQUEST_FAILED
} from "../actions/requestWeatherForLocation";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case WEATHER_FOR_INPUT_REQUEST_SUCCESS:
    case WEATHER_FOR_LOCATION_REQUEST_SUCCESS:
      return {
        error: false,
        loading: false,
        data: action.payload
      };
    case WEATHER_FOR_INPUT_REQUEST_FAILED:
    case WEATHER_FOR_LOCATION_REQUEST_FAILED:
      return {
        error: action.error,
        loading: false,
        data: []
      };
    case WEATHER_FOR_LOCATION_REQUEST_IN_PROGRESS:
    case WEATHER_FOR_INPUT_REQUEST_IN_PROGRESS:
      return {
        error: false,
        loading: true,
        data: []
      };
    default:
      return state;
  }
};
export default weatherReducer;
