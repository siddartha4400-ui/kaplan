import React from "react";

const Button = ({ title, handleChange, className,disabled ,icon}) => {
  return (
    <>
      <button type="button" className={className} onClick={handleChange} disabled={disabled}  >
        {icon && <span className="px-2 align-self-center mb-1">{icon}</span>}
        {title}
      </button>
    </>
  );
};

export default Button;
