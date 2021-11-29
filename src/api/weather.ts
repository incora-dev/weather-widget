import axios from 'axios';
import { WeatherForecast, WeatherLocation } from '../models/weather';

export const getWeather = (location: WeatherLocation) => {
  const { lon, lat, city } = location;
  let query = `?key=${process.env.REACT_APP_WEATHER_API_KEY}&days=6`;
  if (lat && lon) {
    query += `&lat=${lat}&lon=${lon}`
  }
  if (city) {
    query += `&city=${city}`
  }
  return axios.get<WeatherForecast>(`//api.weatherbit.io/v2.0/forecast/daily${query}`);
}
