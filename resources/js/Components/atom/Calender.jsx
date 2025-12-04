import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../NavItems/Navbar.module.css';
import Calender from "../../svgs/navitems/calender";
import Router, { useRouter } from 'next/router';

const MyCalendar = () => {
  const currentDate = new Date();
  const router = useRouter()
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentDate.getMonth()]; 
  const currentYear = currentDate.getFullYear(); 

  const tileDisabled = ({ date }) => {
    // You can define your own logic here to disable specific dates
    // For example, disabling all past dates:
    return date == new Date();
  };

  const HandleCalenderClick = (e) => {
    router.push("/calendar")
  }
  return (
    <div className={styles.calendar}>
      <div className='d-flex icon_calender'>
        <span className= 'mb-2 d-flex align-items-center'> <Calender /><h5 className={`${styles.calender_title} ms-2 mb-0`}>{currentMonthName} {currentYear}</h5></span>
      </div>
      <Calendar
       value={currentDate}
       nextLabel={null} 
       next2Label={null}
       prevLabel={null}
       prev2Label={null}
       locale="en-US"
       onClickDay = {(e) => HandleCalenderClick(e)}
       showNeighboringMonth={false}
      />
    </div>
  );
};

export default MyCalendar;
