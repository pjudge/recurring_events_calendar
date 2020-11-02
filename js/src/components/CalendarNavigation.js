import React from 'react';

function CalendarNavigation(props) {
  return (
    <div className="calendar-navigation">
      <div className="calendar-nav--month-select">
        <select id="month" aria-label="month">
          {props.months.map(month => (
            <option key={month}>{month}</option>
          ))}
        </select>
      </div>
      <div className="calendar-nav--day-select">
        <select id="day" aria-label="day">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
    </div>
  );
}

export default CalendarNavigation;
