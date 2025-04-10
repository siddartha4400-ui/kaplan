import React from 'react'

const RadioField = ({name = '',value = '', checked =0, handleChange={handleChange}, label, customStyle = {  }, id='', className,disable = false }) => {
  return (
    <>
    <label style={{cursor: 'pointer'}} className={className || ''}>
   <input
     style = {{...customStyle, ...{marginRight: '10px'}}}
     type = 'radio'
     name = {name}
     checked = {checked}
     onChange = {handleChange}
     id={id}
     value = {value}
     disabled = {disable}
     className='form-check-input shadow-none cursor-pointer select_border min-width1em'
   />
   {label}
   </label>
   </>
  )
}

export default RadioField