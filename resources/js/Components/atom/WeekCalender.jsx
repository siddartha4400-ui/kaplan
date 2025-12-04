import React, { useState, useEffect } from 'react';
import Leftarrow from '../../svgs/Leftarrow';
import Rightarrow from '../../svgs/Rightarrow';

function WeekCalender({ setStartDate, setEndDate, setChange }) {
    // Get the current date
    const today = new Date();

    // Calculate the current week number
    const currentWeek = Math.ceil(((today - new Date(today.getFullYear(), 0, 1)) / 604800000) + 1);

    // Function to format a date as "DD-MM-YYYY"
    const formatDate = (date) => {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${dd}-${mm}-${yyyy}`;
    };

    // Calculate the start and end dates of the current week based on the currentWeek state.
    const startDate = new Date(today.getFullYear(), 0, (currentWeek - 1) * 7 + 1 - today.getDay());
    const endDate = new Date(today.getFullYear(), 0, (currentWeek - 1) * 7 + 7 - today.getDay());

    const [currentWeekStart, setCurrentWeekStart] = useState(formatDate(startDate));
    const [currentWeekEnd, setCurrentWeekEnd] = useState(formatDate(endDate));

    const [currentWeekNumber, setCurrentWeekNumber] = useState(currentWeek);

    useEffect(() => {
        const today = new Date(), dayOfWeek = today.getDay(), startDate = new Date(today), diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
        startDate.setDate(diff);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6); // Set the end date to be 6 days after the start date

        // Format the end date as "DD-MM-YYYY"
        const endDateStr = formatDate(endDate);

        setCurrentWeekEnd(endDateStr);
        setEndDate(endDateStr);
    }, [currentWeekNumber, today]);

    const handlePrevWeek = () => {
        setCurrentWeekNumber(currentWeekNumber - 1);
        setChange(currentWeekNumber - 1)
    };

    const handleNextWeek = () => {

        setCurrentWeekNumber(currentWeekNumber + 1);
        setChange(currentWeekNumber + 1)
    };

    useEffect(() => {
        const today = new Date(), dayOfWeek = today.getDay(), startDate = new Date(today), diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
        startDate.setDate(diff);


        // const startDate = new Date(today.getFullYear(), 0, (currentWeekNumber - 1) * 7 + 1 - today.getDay());
        const startDateStr = formatDate(startDate);

        setCurrentWeekStart(startDateStr);
        setStartDate(startDateStr)

    }, [currentWeekNumber, today]);

    return (
        <div>
            {/* <button onClick={handlePrevWeek}><span><Leftarrow /></span></button> */}
            {currentWeekStart} {"to"} {currentWeekEnd}
            {/* <button onClick={handleNextWeek}><span><Rightarrow /></span></button> */}
        </div>
    );
}

export default WeekCalender;
