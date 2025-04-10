import React, { useState } from 'react';
import moment from 'moment-timezone'
const TimeZone = ({timeZone}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the current time every second
  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  // Start the timer to update the current time every second
  useState(() => {
    const timer = setInterval(updateCurrentTime, 6000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div>
      {<p>{moment(currentTime).tz(timeZone).format('HH:mm z')}</p>}
    </div>
  );
};

export default TimeZone;