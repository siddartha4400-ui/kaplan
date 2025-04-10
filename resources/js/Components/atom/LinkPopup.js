const LinkPopup = ({ header, content, popupActionClose }) => {
  console.log(content);
  return (
    <div className={`modal d-block scan_popup`} id="myModal">
      <div
        className="modal-dialog-centered p-5"
        style={{ width: "55%", margin: "auto" }}
      >
        <div className="modal-content px-3">
          <div className="modal-header">
            <h5
              className="modal-title text-blue d-inline-block text-truncate cursor-pointer pe-3"
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
                title="Close"
              />
            </span>
          </div>
          <div className="modal-body title mb-3">
            {content.map((link, index) => (
              <div className="col-md-12 mb-2" key={index}>
                <a
                  key={index}
                  className="text-break"
                  href={link}
                  target="_blank" // Add this if you want links to open in a new tab
                  rel="noopener noreferrer" // Add this for security reasons when using target="_blank"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LinkPopup;
