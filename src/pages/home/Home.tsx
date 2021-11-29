import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Widget } from '../../components/widget';
import { AppState } from '../../store/slices';
import { actions as WeatherActions } from '../../store/slices/weather';

export const HomePage = () => {
  const [location, setLocation] = useState('49.84,24.03');
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation(`${latitude},${longitude}`);
    }, err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    dispatch(WeatherActions.getWeather(location));
  },[location]);

  const weatherState = useSelector<AppState>(state => state.weather) as AppState["weather"];

  if (!weatherState.forecast?.data) return null;

  return <div>
    <Widget
      days={weatherState.forecast.data}
      city={weatherState.forecast.city_name}
    />
  </div>
}