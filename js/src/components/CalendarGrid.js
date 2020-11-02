import React from 'react';
import CalendarRow from './CalendarRow';

function CalendarGrid(props) {

  console.log(props.year);
  console.log(props.month);
  console.log(props.day);
  console.log(props.date);
  console.log(props.months);

  return (
    <div className="calendar-grid">
      Today is {props.day}, {props.month} {props.date}, {props.year}.
        <div className="calendar-days">
          {props.week_days.map(weekday => (
            <div key={weekday}>{weekday}</div>
          ))}
        </div>
      <div><CalendarRow /></div>
      <div><CalendarRow /></div>
      <div><CalendarRow /></div>
      <div><CalendarRow /></div>
      <div><CalendarRow /></div>
    </div>
  );
}

export default CalendarGrid;
