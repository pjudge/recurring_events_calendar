import React, { useState, useEffect } from 'react';
import CalendarNavigation from './CalendarNavigation';
import CalendarGrid from './CalendarGrid';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  // Get today's date.
  const today = new Date();

  // Create object to store today's date data.
  const todays_data = {
     year: today.getFullYear(),
     month: today.getMonth(),
     date: today.getDate(),
     day: today.getDay()
  };

  const week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var febDays;
  const month_days = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  useEffect(() => {
    // Use this to discover if this is a leap year or not. Return febDays.
    if (todays_data.year % 4 === 0) {
      if (todays_data.year % 100 === 0) {
        if (todays_data.year % 400 === 0) {
          febDays = 29;
        }
        else {
          febDays = 28;
        }
      }
      else {
        febDays = 29;
      }
    }
    else {
      febDays = 28;
    }
    console.log(febDays);
  }, []);

  return (
    <div className="calendar">
      {/* <CalendarNavigation year={year} month={month} date={date} day={day} week_days={week_days} months={months} />
      <CalendarGrid year={year} month={month} date={date} day={day} week_days={week_days} months={months} /> */}

      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
      </div>


    </div>
  );
}

export default App;
