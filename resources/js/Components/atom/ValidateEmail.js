import React from 'react'

const ValidateEmail = (data) => {
    var mailformat = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    if (mailformat.test(data.toLowerCase())) {
      return true;
    }
    else {
      return false;
    }
}

export default ValidateEmail