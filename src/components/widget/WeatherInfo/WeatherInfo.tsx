import React from 'react';
import { AiFillCloud } from 'react-icons/ai';
import { FiWind } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import css from './WeatherInfo.module.scss';

interface WeatherInfoProps {
  icon: string;
  dayName: string;
  temperature: number;
  clouds: number;
  wind: number;
  cityName: string;
  text: string;
  onSettingsClick: () => void;
}

export const WeatherInfo = ({
  icon,
  dayName,
  temperature,
  clouds,
  wind,
  cityName,
  text,
  onSettingsClick
}: WeatherInfoProps) => {
  return (<div className={css.mainBlock}>
    <div>
      <div className={css.city}>{cityName}</div>
      <div className={css.day}>{dayName}</div>
      <div title="cloudy"><AiFillCloud /> {clouds}%</div>
      <div title="wind speed"><FiWind /> {wind}m/s</div>
      <div>{text}</div>
    </div>
    <div className={css.rightSide}>
      <IoMdSettings onClick={onSettingsClick} />
      <div className={css.temperature}>{temperature}&#8451;</div>
      <img src={icon} alt="" />
    </div>
  </div>)
}
