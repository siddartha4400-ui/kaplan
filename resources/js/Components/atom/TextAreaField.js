import React, { useState } from "react";
const style ={}
export default function TextAreaField({
  type = "textarea",
  className = '',
  value = '',
  isDisabled = false,
  placeholder = '',
  handleChange={handleChange},
  name='',
  rows="4",
  cols="60",
  customStyle = {boxShadow:'none',borderRadius:'0px'},
  onKeyDown = function () {},
}){
    return (
        <textarea
          type={type}
          className={className}
          disabled={isDisabled}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          style = {{...style, ...customStyle}}
          rows={rows}
          cols={cols}
          onKeyDown={onKeyDown}
        />
      );
}