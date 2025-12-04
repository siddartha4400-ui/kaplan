import React from 'react'

export default function ValidateText({text, style={} }) {
 <>
 <small style={style}
        className="form-text text-danger poppins-regular-16px col-md-5">
       {text}
       </small>
 </>
}


