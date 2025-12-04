import React from "react";

const style = {};

export default function InputColorfield({
  type = "color",
  className = '',
  value = '',
  isDisabled = false,
  placeholder = '',
  customStyle = {},
  handleChange={handleChange},
  name='',
  parentDivClassName = {}
}) {
  return (
    <div className={parentDivClassName}>
    <input
      style={{ ...style, ...customStyle }}
      type={type}
      className={className}
      disabled={isDisabled}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
    />
    </div>
  );
}
