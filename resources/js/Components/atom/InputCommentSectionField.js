import React, { useState } from "react";

const style = {};

export default function InputTextAreaField({
  className = 'border-blue form-control shadow-none rounded-1 text-blue',
  value = '',
  isDisabled = false,
  placeholder = '',
  customStyle = {},
  handleChange={handleChange},
  name='',
  rows="1",
  onKeyDown=function(){}
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <textarea
      style={{ ...style, ...customStyle }}
      className={className}
      disabled={isDisabled}
      placeholder={isFocused ? '' : placeholder}
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
