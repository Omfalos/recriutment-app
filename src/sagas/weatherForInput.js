import { put, call } from "redux-saga/effects";

import {
  WEATHER_FOR_INPUT_REQUEST_FAILED,
  WEATHER_FOR_INPUT_REQUEST_IN_PROGRESS,
  WEATHER_FOR_INPUT_REQUEST_SUCCESS
} from "../actions/requestWeatherForInput";
import { getWeatherForInput } from "../api/weatherRequests";

function* getWeatherInfoForInputSaga({ payload }) {
  yield put({ type: WEATHER_FOR_INPUT_REQUEST_IN_PROGRESS });

  try {
    const result = yield call(getWeatherForInput, payload);

    yield put({ type: WEATHER_FOR_INPUT_REQUEST_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: WEATHER_FOR_INPUT_REQUEST_FAILED, error });
  }
}

export default getWeatherInfoForInputSaga;
