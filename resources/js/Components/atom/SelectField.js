import React, { useRef } from "react";
import Select from "react-select";
const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minHeight: 35,
    borderColor: "red",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "lightgray" : null,
    color: "black",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};
export default function MultiSelect({
  handleChange,
  standards,
  options,
  disabled = false,
  isMulti = false,
  name = "",
  placeholder = "Select",
  className = "pc-single-select",
  customStyle = {},
  classNamePrefix = "",
  isSearchable = true,
  isClearable = true,
  menuPlacement = "auto",
  ref = {},
  maxMenuHeight = 240,
  preventRemovalList = false, // New prop to define items that cannot be removed
}) {
  const menuPortalTarget = useRef(document.body);

  // Custom handleChange function to prevent removal of certain items
  const customHandleChange = (selectedOptions, actionMeta) => {
    if (actionMeta.action === 'remove-value' || actionMeta.action === 'pop-value') {
      const optionToRemove = actionMeta.removedValue;
      if (preventRemovalList) {
        // If the item is in the preventRemovalList, keep it in the selected options
        setTimeout(() => {
          handleChange([...standards, optionToRemove]);
        });
        return;
      }
    }
    handleChange(selectedOptions);
  };
  const customFilter = (option, searchText) => {
    if (
      option.label !== undefined &&
      option.label !== null &&
      option.label.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className={className || "col-md-3 mt-2 mb-3 p-0"} style={customStyle}>
      <Select
        placeholder={placeholder}
        value={standards}
        onChange={customHandleChange}
        isDisabled={disabled}
        options={options}
        filterOption={customFilter}
        menuPlacement={menuPlacement}
        isSearchable={isSearchable}
        isMulti={isMulti}
        style={customStyles}
        name={name}
        ref={ref}
        menuPortalTarget={menuPortalTarget.current}
        classNamePrefix={classNamePrefix || "react-select-prefix"}
        maxMenuHeight={maxMenuHeight}
        noOptionsMessage={() => "No option"}
        isClearable={isClearable}
        theme={(theme) => ({
          ...theme,
          borderRadius: "3px",
          border: "1px",
          colors: {
            ...theme.colors,
            primary: "#47596980",
          },
        })}
      />
    </div>
  );
}
