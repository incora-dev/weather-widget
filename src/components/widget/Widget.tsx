import React, { useState } from 'react';
import { WeatherApiDay } from '../../models/weather';
import { WeatherDayCard } from './WeatherDayCard';
import { WeatherInfo } from './WeatherInfo';
import css from './Widget.module.scss';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface WidgetProps {
  days: WeatherApiDay[];
  city: string;
  onChangeLocation: (location: string) => void;
}

export const Widget = ({ days = [], city, onChangeLocation }: WidgetProps) => {
  const [current, setCurrent] = useState(days[0]);

  const onChangeSettings = () => {
    const location = prompt('Enter city name (in format etc. Kyiv)');
    if (location) {
      onChangeLocation(location);
    }
  }

  return <div className={css.wrapper}>
    <WeatherInfo
      onSettingsClick={onChangeSettings}
      dayName={DAY_NAMES[new Date(current?.valid_date).getDay()]}
      icon={`https://www.weatherbit.io/static/img/icons/${current?.weather.icon}.png`}
      temperature={current.temp}
      cityName={city}
      clouds={current.clouds}
      wind={current.wind_spd}
      text={current.weather.description}
      />
    <div className={css.dayList}>
      {days.map(el => (
        <WeatherDayCard
          onClick={() => setCurrent(el)}
          isActive={el.datetime === current.datetime}
          key={el.datetime}
          dayName={DAY_NAMES[new Date(el.valid_date).getDay()]}
          icon={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}
          temperature={el.temp}
          />
      ))}
    </div>
  </div>
}
