import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../NavItems/Navbar.module.css';
import Calender from "../../svgs/navitems/calender";
import Router, { useRouter } from 'next/router';
// import { Modal, Button } from 'react-bootstrap';
import { Modal, Button } from '../Packages/utlis/ReactBOOTSTRAP';
import { datasave } from "@/Services/ApiServices";
import { DashboardDetails } from '../../Services/ApiEndPoints';
import CloseIcon from '../../svgs/CloseIcon';
import TodoList from '../NavItems/DashBoardItems/TodoList';

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
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const handleIconClick = () => {
    setShowCalendarModal(true);
  };

  const handleCloseCalendarModal = () => {
    setShowCalendarModal(false);
  };

  const [state, setState] = useState({
    display_details: [],
    load: 0
  })

  useEffect(() => {
    datasave.service(DashboardDetails, 'GET').then(response => {
      if (response.status === 200) {
        setState({ ...state, display_details: response.data, load: 1 })
      } else {
        setState({ state, load: 0 })
      }
    })
  }, [])

  return (
    <>
      <div className={`${styles.calendar} d-block d-lg-block d-xl-none`}>
        <div>
          <div className='d-flex icon_calender'>
            <span
              className='mb-2 d-flex align-items-center cursor-pointer'
              onClick={handleIconClick}
            >
              <Calender />
            </span>
          </div>
          <Modal show={showCalendarModal} onHide={handleCloseCalendarModal} centered>
            <Modal.Header className='p-0'>
            <h5 className={`${styles.calender_title} ms-2 mb-0 font-14px`}>{currentMonthName} {currentYear}</h5>
            <Button onClick={handleCloseCalendarModal} className='bg-transparent shadow-none border-0'>
              <CloseIcon />
            </Button>
            </Modal.Header>
            
            <Modal.Body className='px-0 text-center dashboard-calendar-popup'>
              <Calendar
                value={currentDate}
                nextLabel={null}
                next2Label={null}
                prevLabel={null}
                prev2Label={null}
                locale="en-US"
                onClickDay={(e) => HandleCalenderClick(e)}
                showNeighboringMonth={false}
              />
            </Modal.Body>
            <div className={`${styles.sidebar__activetab} mt-3 mb-2 LabelText font-14px`}>Today</div>
            <div>
              {state.display_details.todaysList !== undefined && state.display_details.todaysList.length > 0 ? <TodoList todos={state.display_details.todaysList} /> : (
                state.load === 1 ? <div className='text-danger font-14px'>{"No results found"}</div> : <img
                  height="50px !important"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                />
              )}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
