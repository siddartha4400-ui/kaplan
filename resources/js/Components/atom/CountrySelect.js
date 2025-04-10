import React, { useEffect } from 'react';
import Select, { components } from 'react-select';

const customStyles = {
  control: base => ({
    ...base,
    height: 35,
    minHeight: 35
  }),
  input: (provided) => ({
    ...provided,
    autoComplete: 'new-password',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'lightgray' : null,
    color: 'black',
  }),
};

const CustomInput = (props) => (
  <components.Input {...props} autoComplete="new-password" />
);

const CountrySelect = ({
  handleChange,
  standards,
  options,
  disabled,
  isMulti = false,
  name = '',
  placeholder = 'Select',
  className = 'pc-single-select',
  customStyle = {},
  classNamePrefix = '',
  isSearchable = true,
  isClearable = true
}) => {
  // useEffect(() => {
  //   const input = document.querySelector('input[id^="react-select-"]');
  //   if (input) {
  //     input.setAttribute('autocomplete', 'new-password');
  //     input.setAttribute('name', 'random-name-' + Math.random().toString(36).substr(2, 5));
  //   }
  // }, []);

  return (
    <div className={className} style={customStyle}>
      <form autoComplete="off">
        <input type="text" style={{ display: 'none' }} />
        <input type="password" style={{ display: 'none' }} />
        <Select
          placeholder={placeholder}
          value={standards}
          onChange={handleChange}
          isDisabled={disabled}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          styles={customStyles}
          name={name}
          components={{ Input: CustomInput }}
          classNamePrefix={classNamePrefix || 'react-select-prefix'}
          noOptionsMessage={() => 'No option'}
          isClearable={isClearable}
          theme={(theme) => ({
            ...theme,
            borderRadius: '3px',
            border: '1px',
            colors: {
              ...theme.colors,
              primary: '#4759694D',
            },
          })}
        />
      </form>
    </div>
  );
};

export default CountrySelect;
