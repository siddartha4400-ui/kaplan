import React from "react";

const style = {
  /* ADD  STYLES NEEDED*/
};

export default function SearchField({
  type = "text",
  className = "",
  placeholder = "",
  name="",
  customStyle = {},
  handleChange='',
}) {
  return (
    <input
      style={{ ...style, ...customStyle }}
      type={type}
      className={className}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
    />
  );
}