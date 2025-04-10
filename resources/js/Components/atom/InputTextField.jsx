import React, { useState } from "react";

const style = {};

export default function InputTextfield({
  type = "text",
  className = '',
  value = '',
  isDisabled = false,
  placeholder = '',
  customStyle = {},
  handleChange = { handleChange },
  name = '',
  onKeyDown = function () { },
  onFocus = function () { }, //
  onBlur = function () { },//
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {//
    setIsFocused(true);
    onFocus(e)//
  };

  const handleBlur = (e) => {//
    setIsFocused(false);
    onBlur(e)//
  };

  return (
    <input
      style={{ ...style, ...customStyle }}
      type={type}
      className={className}
      disabled={isDisabled}
      placeholder={isFocused ? '' : placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={onKeyDown}
    />
  );
}
