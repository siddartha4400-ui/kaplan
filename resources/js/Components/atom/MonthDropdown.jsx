import React from "react";
import moment from "moment";

const MonthDropdown = ({ selectedMonth, onChange }) => {
  // Generate array of all months
  const months = moment.months().map((month, index) => ({
    value: index,
    label: month,
  }));

  return (
    <select
      value={selectedMonth}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="p-2"
      style={{
        backgroundColor: "white", // Set your desired background color
        border: "1px solid #ccc", // Optional: Add border for better appearance
      }}
    >
      {months.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>

  );
};

export default MonthDropdown;
