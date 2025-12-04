import React from "react";

const Search = ({type ="Text",
  placeholder = "",
   handlechange={handleChange},
  className = "",
  label = "",
}) => {
  return (
    <>
      <input
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={handlechange}
        className={className}
      />
       
    </>
  );
};

export default Search;
