const customPopup = ({
  content,
  popupActionNo,
  popupActionYes,
  handleClosePopup,
  disabled,
  loadClass,
  size
}) => {

  return (
    <div className="modal asdsa" id="myModal" style={{ display: 'block', background: 'rgb(0,0,0,0.5)' }}>
      <div className={`modal-dialog modal-dialog-centered modal-md`}>
        <div className={loadClass
          ? `modal-content ${loadClass} `
          : "modal-content"} >
          <div className="modal-header">
            {/* <h4 className="modal-title">Delete function</h4> */}
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="modal"
              onClick={handleClosePopup !== undefined ? handleClosePopup : popupActionNo}
              disabled={disabled}
              title="Close"
            />
          </div>

          <div className="modal-body title">
            <span
              style={{ color: '#475969', fontWeight: 'bold' }}
            >{content}</span>
          </div>

          <div className="modal-footer pb-0">
            <button type="button" className="btn modal__NoBtn rounded-1 shadow-none DraftBtn px-3 m-0" onClick={popupActionNo}>
              {'No'}
            </button>
            <button className="btn rounded-1 shadow-none m-0 ms-3 modal__YesBtn SaveBtn px-3" onClick={popupActionYes}>
              {'Yes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default customPopup;
