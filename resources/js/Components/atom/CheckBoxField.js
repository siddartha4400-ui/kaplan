import React from "react";

let styles_id = {};
const CheckBoxField = ({
  name,
  value,
  label,
  customStyle = {},
  className,
  id="",
  tick,
  onCheck,
  disable=false,
}) => {
  const handleClick = (event) => {
    // Only trigger the checkbox when clicking on the input element
    if (event.target.tagName !== 'INPUT') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <>
      <label
        style={{ ...styles_id, ...customStyle }}
        className={className}
        onClick={handleClick}
      >
        <input
          name={name}
          type="checkbox"
          value={value}
          checked={tick || false}
          id={id}
          disabled = {disable}
          onChange={onCheck}
          className="form-check-input shadow-none rounded-0 me-2"
          style={{border:'1px solid #4759694D'}}
        />
        <span> {label} </span>
      </label>
    </>
  );
};

export default CheckBoxField;