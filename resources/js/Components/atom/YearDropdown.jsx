import React from "react";
import moment from "moment";

const YearInput = ({ selectedYear, onChange }) => {
  const handleYearChange = (e) => {
    const value = e.target.value;
    // Allow empty input for typing
    if (value === "") {
      onChange("");
      return;
    }

    const year = parseInt(value);
    // Basic validation for reasonable year range
    if (!isNaN(year) && year.toString().length <= 4) {
      onChange(year);
    }
  };

  return (
    <input
      type="number"
      value={selectedYear}
      onChange={handleYearChange}
      placeholder="Enter year"
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
      // Removes spinner arrows from number input
      style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
    />
  );
};
export default YearInput;
