import { put, call } from "redux-saga/effects";

import {
  WEATHER_FOR_LOCATION_REQUEST_FAILED,
  WEATHER_FOR_LOCATION_REQUEST_IN_PROGRESS,
  WEATHER_FOR_LOCATION_REQUEST_SUCCESS
} from "../actions/requestWeatherForLocation";
import { getWeatherForLocation } from "../api/weatherRequests";

function* getWeatherInfoForLocationSaga({ payload }) {
  yield put({ type: WEATHER_FOR_LOCATION_REQUEST_IN_PROGRESS });
  try {
    const result = yield call(getWeatherForLocation, payload);

    yield put({ type: WEATHER_FOR_LOCATION_REQUEST_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: WEATHER_FOR_LOCATION_REQUEST_FAILED, error });
  }
}

export default getWeatherInfoForLocationSaga;
