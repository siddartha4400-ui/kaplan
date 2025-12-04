import React, { useState } from "react";
import TimeField from 'react-simple-timefield';

const style = {
    border: '1px solid lightgray',
    fontSize: 17,
    width: 120,
    padding: '5px 8px',
    color: '#333',
    borderRadius: 3,
    height: 38,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius:'0px'
}
export default function TimeFieldAtom({
  value,
  onChange,
  inputRef = '',
  className = "input_sw shadow-none",
  styleObj =  style,
}){
    return (
      <TimeField
     value={value}                       // {String}   required, format '00:00' or '00:00:00'
     onChange={onChange} // {Function} required
  //  input={<MyCustomInputElement />}   // {Element}  default: <input type="text" />
     inputRef={inputRef}          // {Function} input's ref
     colon=":"                          // {String}   default: ":"
     style={styleObj}
      className={`${className} form-control`}
     />
      );
}
