import React from 'react';
import CalendarNavigation from './CalendarNavigation';
import CalendarGrid from './CalendarGrid';

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  return (
    <div className="calendar">
      <CalendarNavigation />
      <CalendarGrid year={year}  month={month} date={date} day={day} />
    </div>
  );
}

export default App;
