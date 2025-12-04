import React from 'react';
import CreateWikiStyles from '../../components/Wekion/create-weki.module.css';


function RadioField2(props) {
  const {
    label,
    value,
    checked,
    onChange,
    name,
  } = props;

  const handleClick = (event) => {
    // Only trigger the radio button when clicking on the label's text
    if (event.target.tagName !== 'INPUT') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <label onClick={handleClick}>
      <input
        className={'form-check-input shadow-none mt-2 me-2 field__border'}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={` ${CreateWikiStyles.LabelText} mb-1`}>{label}</span>
    </label>
  );
}

export default RadioField2;
