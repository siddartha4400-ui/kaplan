
import React, { useEffect, useState } from 'react';
import moment from 'moment';


function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(moment().format('DD-MM-YYYY'));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        {/* <h2>Current Date</h2> */}
        <p>{currentDate}</p>
      </div>
    );
  }

  export default CurrentDate;
