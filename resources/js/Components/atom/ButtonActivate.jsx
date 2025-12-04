import React from "react";

const Button = (props) => {
  const {className,handleChange,disabled,icon,title} = props
  return (
    <>
      <button type="button" className={className} onClick={handleChange} disabled={disabled}  >
        {icon && <span className="px-2 align-self-center mb-1">{icon}</span>}
        {title}
        {props.children}
      </button>
    </>
  );
};

export default Button;
