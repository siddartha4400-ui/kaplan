const TechnologyPopup = ({ header, descriptionValues, popupActionClose ,state,onChangeRadio}) => {
    // console.log(state.popdesc,"state")
  return (
    <div className={`modal d-block scan_popup`} id="myModal">
      <div
        className="modal-dialog-centered p-5"
        style={{ width: "55%", margin: "auto" }}
      >
        <div className="modal-content px-3">
          <div className="modal-header">
            <h5
              className="modal-title text-blue d-inline-block text-truncate  pe-3"
              title={header}
            >
              {header}
            </h5>
            <span>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                onClick={popupActionClose}
              />
            </span>
          </div>
          <div className="modal-body title mb-3">
            <textarea
              className="border w-100"
              rows="5"
              value={ state.popdesc }
              onChange={(e) => onChangeRadio(state.popuplabel, e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechnologyPopup;
