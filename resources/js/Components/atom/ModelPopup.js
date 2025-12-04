const ModelPopup = (props)=>

{

  return (
    <div className="modal" id="myModal" style={{ display: 'block', background: 'rgb(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content ">
        <div className="modal-header todo-start-stop">
          {<h4 className="modal-title">{props.title}</h4> }
          <button
            type="button"
            className="btn-close shadow-none"
            data-bs-dismiss="modal"
            onClick={props.handleClosePopup ?? ''}
            title="Close"
          />
        </div>

        <div className="modal-body title">
          {props.body}
        </div>

        <div className="modal-footer">

        </div>
      </div>
    </div>
  </div>
  )
}
export default ModelPopup;
