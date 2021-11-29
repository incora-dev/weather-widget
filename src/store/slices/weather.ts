import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherForecast } from '../../models/weather';

const initialState = {
  isLoading: false,
  forecast: {} as WeatherForecast
};

const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    getWeather: (state, action: PayloadAction<string>) => {
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
