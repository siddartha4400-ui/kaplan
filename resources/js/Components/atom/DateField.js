import React from 'react';
import moment from "moment";
const style =  { /* ADD IF ANY STYLES NEEDED*/  }

export default function DateField({
    name,
    value,
    handleChange,
    minDate='1947-08-15',
    maxDate='2222-08-15',
    id,
    customStyle = {boxShadow:'none',borderRadius:'0px',marginLeft:'1px'},
    className = 'col-md-5',
    isDisabled = false,
    placeholder
  }) {
    console.log(value)
  return (
    <>
     <input
     style={{...style, ...customStyle}}
       type="date"
       name={name}
       min={minDate}
       max={maxDate}
       placeholder={placeholder}
       value={value}
       className={'atom-input-field-default form-control border ' + className}
       disabled={isDisabled}
       id={id}
       data-date-format={"DD MMMM YYYY"}
       onChange={handleChange}
     />
    </>
  )
}
