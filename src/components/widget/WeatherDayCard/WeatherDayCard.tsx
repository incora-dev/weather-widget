import React from 'react';
import cn from 'classnames';
import css from './WeatherDayCard.module.scss';

interface WeatherDayCardProps {
  dayName: string;
  icon: string;
  temperature: number;
  isActive: boolean;
  onClick: () => void;
}

export const WeatherDayCard = ({ dayName, icon, temperature, isActive, onClick }: WeatherDayCardProps) => {
  return (<article onClick={onClick} className={cn(css.card, { [css.active]: isActive })}>
    <img src={icon} alt="" />
    <div className={css.cardDay}>{dayName}</div>
    <div>{temperature}&#8451;</div>
  </article>);
}
