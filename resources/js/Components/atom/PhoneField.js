import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneField = ({ onChangePhone , value}) => {
  return (
    <div >
      <PhoneInput
        country={"us"}
        name="phone_no"
        value={value}
        onChange={onChangePhone}
      />
    </div>
  );
};

export default PhoneField;
