import { takeEvery } from "redux-saga";

import { WEATHER_FOR_INPUT_REQUEST } from "../actions/requestWeatherForInput";
import { WEATHER_FOR_LOCATION_REQUEST } from "../actions/requestWeatherForLocation";
import getWeatherInfoForInputSaga from "./weatherForInput";
import getWeatherForLocationSaga from "weatherForLocation";

function* rootSaga() {
  yield [
    yield takeEvery(WEATHER_FOR_LOCATION_REQUEST, getWeatherForLocationSaga),
    yield takeEvery(WEATHER_FOR_INPUT_REQUEST, getWeatherInfoForInputSaga)
  ];
}

export default rootSaga;
