import React from 'react'
const style = {
    color: "red",
 }
 const customStyle ={

 }
const RequiredField = () => {
  return (
    <>
    <span className='ms-1' style={{...style, ...customStyle}} >*</span>
   </>
  )
}

export default RequiredField