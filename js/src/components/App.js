import React from 'react';
import CalendarNavigation from './CalendarNavigation';
import CalendarGrid from './CalendarGrid';

function App() {
  return (
    <div className="calendar">
      <CalendarNavigation />
      <CalendarGrid />
    </div>
  );
}

export default App;
