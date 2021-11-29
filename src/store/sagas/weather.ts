import { takeLatest, all, put, call } from 'redux-saga/effects';
import { actions as WeatherActions } from '../slices/weather';
import { getWeather } from '../../api/weather';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { WeatherForecast, WeatherLocation } from '../../models/weather';

function* getWeatherForecast(action: PayloadAction<WeatherLocation>): Generator {
  try {
    const response = (yield call(getWeather, action.payload)) as AxiosResponse<WeatherForecast>;
    yield put(WeatherActions.getWeatherSuccess(response.data));
  } catch (error) {
    yield put(WeatherActions.getSubjectsFailure(error));
  }
}

function* watchGetLandingCourses() {
  yield takeLatest(WeatherActions.getWeather, getWeatherForecast);
}

// eslint-disable-next-line
export default function* () {
  yield all([
    watchGetLandingCourses()
  ]);
}
