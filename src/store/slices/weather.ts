import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherForecast, WeatherLocation } from '../../models/weather';

const initialState = {
  isLoading: false,
  forecast: {} as WeatherForecast
};

const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    getWeather: (state, action: PayloadAction<WeatherLocation>) => {
      state.isLoading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
    },
    getSubjectsFailure: (state, action) => {
      state.isLoading = false;
    }
  }
});

export const { reducer, actions } = weatherForecastSlice;
