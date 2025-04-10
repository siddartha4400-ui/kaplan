import React, { useState } from "react";
import TimeFieldAtom from "./TimeFieldAtom";
import SelectField from "./SelectField";
import Required from "./RequiredField";
const SingleDropdown = ({
  header,
  content,
  popupActionNo,
  popupActionYes,
  value1,
  onSelectType,
  reassign,
}) => {
  return (
    <div
      className="modal"
      id="myModal"
      style={{ display: "none", background: "rgb(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-blue d-inline-block text-truncate pe-3">
              {header}
            </h5>
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="modal"
              onClick={popupActionNo}
            />
          </div>

          {/* ss */}
          <div className="modal-body title">
            <div className="row justify-content-center">
              <div className="col-12 align-self-center">
                <span className="text-blue me-4">
                  {content}
                  <Required />
                </span>

                {
                  <SelectField
                    options={value1}
                    isClearable={false}
                    handleChange={onSelectType}
                  />
                }
              </div>
              <span className="error text-danger">
                {reassign.error ? "This field is required" : ""}
              </span>{" "}
            </div>
          </div>
          <div className="modal-footer border-0 py-0">
            <button
              type="button"
              className="btn modal__NoBtn rounded-1 shadow-none DraftBtn px-3 m-0"
              onClick={popupActionNo}
            >
              {"Cancel"}
            </button>
            <button
              className="btn rounded-1 shadow-none me-0 ms-3 modal__YesBtn SaveBtn px-3"
              onClick={(e) => popupActionYes("save")}
              title="Save"
            >
              {`${reassign.save == true ? "Saving..." : "Save"}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleDropdown;
