import React, { useState } from "react";

const style = {};

export default function InputTextAreaField({
  className = "border-blue form-control shadow-none rounded-1 text-blue",
  value = "",
  isDisabled = false,
  placeholder = "",
  customStyle = {},
  handleChange = { handleChange },
  name = "",
  rows = "4",
  onKeyDown = function () {},
  onFocus = function () { }, //
  onBlur = function () { },//
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur(e);
  };

  return (
    <textarea
      style={{ ...style, ...customStyle }}
      className={className}
      disabled={isDisabled}
      placeholder={isFocused ? "" : placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      rows={rows}
      onKeyDown={onKeyDown}
    />
  );
}
