import React, { useState } from 'react';
import { WeatherApiDay } from '../../models/weather';
import { WeatherDayCard } from './WeatherDayCard';
import { WeatherInfo } from './WeatherInfo';
import css from './Widget.module.scss';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface WidgetProps {
  days: WeatherApiDay[];
  city: string;
}

export const Widget = ({ days = [], city }: WidgetProps) => {
  const [current, setCurrent] = useState(days[0]);

  return <div className={css.wrapper}>
    <WeatherInfo
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
