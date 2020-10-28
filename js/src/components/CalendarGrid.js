import React from 'react';
import CalendarRow from './CalendarRow';

function CalendarGrid(props) {
console.log(props.year);
console.log(props.month);
console.log(props.day);
console.log(props.date);

  return (
    <div className="calendar-grid">
      The year is {props.year}
      <div className="calendar-days">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
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
