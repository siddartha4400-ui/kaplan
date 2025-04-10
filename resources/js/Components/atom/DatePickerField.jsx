import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Calendar from "../../svgs/Todosion/Calendar";

import { useState, useEffect } from "react";
import { startOfWeek, isWeekend } from "date-fns";
import { datasave } from "../../Services/ApiServices";
import { getGHDate } from "../../Services/ApiEndPoints";

export default function DatePickerField({
  name,
  dateFormat = "DD-MM-YYYY",
  placeholderText = "dd-mm-yyyy",
  onChange,
  minDate = "",
  maxDate = "",
  value, // This will be the date string like 'YYYY-MM-DD'
  className = "rounded-0 shadow-none width-100-field form-control border-blue text-blue w-100",
  OnChangeParams = "start_date",
  isDisabled = false,
  startOfWeek,
  disableWeekends = false,
  disableHolidays = false,
  excludeDates=[]
}) {
  const CustomInput = ({ onClick }) => (
    <div class="input-group">
      <input
        type="text"
        value={value ? moment(value).format(dateFormat) : ""}
        onClick={onClick}
        placeholder={placeholderText}
        className="form-control shadow-none border-blue position-relative rounded-1 text-blue"
      />
      <div className="input-group-append Calendar">
        <span
          onClick={onClick}
          className="input-group-text bg-transparent border-0"
        >
          <span className="calendar-icon">
            <Calendar />
          </span>
        </span>
      </div>
    </div>
  );

  const convertStringToDate = (dateString) => {
    if (typeof dateString !== 'string') return null;
    if (!dateString) return null; 
  
    return new Date(dateString.replace(" ", "T"));
  };
  
  useEffect(() => {
    if (disableHolidays) getAllHolidays();
  }, []);

  const [state, setState] = useState({
    holdateDates: [],
    userData: localStorage.getItem("usersData"),
  });
  const jsonData = JSON.parse(state.userData);
  const countryCode = jsonData.country_code;

  const getAllHolidays = async () => {
    try {
      const response = await datasave.service(getGHDate, "GET");
      const Data = response.data;
      if (Data.hasOwnProperty(countryCode)) {
        const filteredData = Data[countryCode]
          .filter((entry) => entry.holiday_type === 0)
          .map((entry) => entry.date.split(" ")[0]);

        setState({
          ...state,
          holdateDates: filteredData,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const apiDates = state?.holdateDates;
  /*
  const filterDates = (date) => {
    const disabledDateStrings = apiDates;
    const disabledDates = disabledDateStrings.map(
      (apiDate) => new Date(apiDate)
    );
    if (filterWeekdays) {
      return (
        !isWeekend(date) &&
        !disabledDates.some(
          (disabledDate) => date.toDateString() === disabledDate.toDateString()
        )
      );
    } else {
      return !disabledDates.some(
        (disabledDate) => date.toDateString() === disabledDate.toDateString()
      );
    }
  };
*/
  const filterDates = (date) => {
    const disabledDateStrings = apiDates;
    const disabledDates = disabledDateStrings.map(
      (apiDate) => new Date(apiDate)
    );

    if (disableWeekends && isWeekend(date)) {
      return false; // Disable weekends
    }

    if (
      disableHolidays &&
      disabledDates.some(
        (disabledDate) => date.toDateString() === disabledDate.toDateString()
      )
    ) {
      return false; // Disable holidays
    }

    return true; // Enable other dates
  };

  return (
    <>
      <DatePicker
        className={className}
        name={name}
        dateFormat={"dd-MM-yyyy"} 
        inputFormat={"dd-MM-yyyy"} 
        placeholderText={"dd-mm-yyyy"}
        selected={convertStringToDate(value)} // Ensure the date is a valid Date object
        onChange={(date) => onChange(date, name)}
        minDate={minDate}
        maxDate={maxDate}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        calendarStartDay={1}
        excludeDates={excludeDates??[]}
        numberOfMonths={2}
        monthsShown={2}
        customInput={<CustomInput />}
        filterDate={filterDates}
        disableWeekends={disableWeekends}
      />
    </>
  );
}
