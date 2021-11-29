import axios from 'axios';
import { WeatherForecast } from '../models/weather';

export const getWeather = (location: string) => {
  const [lat, lon] = location.split(',');
  return  axios.get<WeatherForecast>(`//api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=6&key=${process.env.REACT_APP_WEATHER_API_KEY}`)
}
