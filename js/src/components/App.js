import React from 'react';
import CalendarNavigation from './CalendarNavigation';
import CalendarGrid from './CalendarGrid';

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  const week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="calendar">
      <CalendarNavigation year={year} month={month} date={date} day={day} week_days={week_days} months={months} />
      <CalendarGrid year={year} month={month} date={date} day={day} week_days={week_days} months={months} />
    </div>
  );
}

export default App;
