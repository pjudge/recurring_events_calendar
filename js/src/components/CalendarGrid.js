import React from 'react';
import CalendarRow from './CalendarRow';

function CalendarGrid() {
  return (
    <div className="calendar-grid">
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
